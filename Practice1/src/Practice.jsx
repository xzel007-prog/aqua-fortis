

function Button ({onClick}){
  return(
    <button onClick={onClick}>
      Click me
    </button>
  )
}



function App() {

  function handleChange(event) {
    console.log(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    console.log("Form submitted");
  }

  function handleClick(){
    console.log("Button clicked");
  }

  return (
    <div>
      <h1>Hello, React!</h1>
      <input onChange={handleChange} />

      <form onSubmit={handleSubmit}>
      <input/>
      <button type="submit">Submit  </button>
    </form>

    <Button onClick={handleClick}/>

    </div>

    
  );

}
  

export default App;