import { Routes, Route } from 'react-router-dom';
import Layout from './data/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Facilities from './Pages/Facilities'
import Industries from './Pages/Industries'
import Contact from './Pages/Contact'


import './App.css'

function App() {
  

  return (
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="training"  element={<Training />}/> */}
          <Route path="facilities"  element={<Facilities />}/>
          <Route path="industries"  element={<Industries />}/>
          <Route path="contact"  element={<Contact />}/>
        </Route>
     </Routes>
  )
   
}   

export default App
