import { createContext, useContext, useState, useReducer } from "react";

import './App.css'

const CartContext = createContext();

function BuyItems(goods, setGoods){
  switch(setGoods.type){
    case"add":
      return [...goods, setGoods.item]
      case"clear":
        return [];
      default:
        return goods;
  }
}

const CartList = [
  {id: 1, name: "Apple"},
  {id: 2, name: "Banana"},
  {id: 3, name: "Orange"},
  {id: 4, name: "Mango"}
]

function App(){
  const [cart, dispatch] = useReducer(BuyItems, []);

  
  return(
    <CartContext.Provider value={{cart, dispatch}}>
      <div className="Shopping-menu">
          <h1>Shopping Cart</h1>
            <div>
              {CartList.map((item) => (
                <div key={item.id}>
                  <span>
                    {item.name}
                    <button onClick={() => dispatch({ type: "add", item: item.name })} style={{ marginLeft: 8 }}>Add to Cart</button>
                  </span>
                </div>
              ))}
            </div>
          <CartSummary/>
      </div>
    </CartContext.Provider>


    

  )

}


export default App

function CartSummary(){
  // 7.1 useContext to get cart and dispatch
  const { cart, dispatch } = useContext(CartContext);

  // 7.2 conditional branch for empty cart
  if (!cart || cart.length === 0) {
    // 7.3 render empty message
    return (
      <div className="cart-summary">
        <h2>Your Cart</h2>
        <p>The cart is empty.</p>
      </div>
    );
  }

  // 7.3 render list of cart items when items exist
  return (
    <div className="cart-summary">
      <h2>Your Cart ({cart.length})</h2>
      <ul>
        {cart.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
      {/* 7.4 Clear button */}
      <button onClick={() => dispatch({ type: 'clear' })}>Clear Cart</button>
    </div>
  );
}