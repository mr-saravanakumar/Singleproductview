import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Contact from './Contact';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:pid" element={<SingleProduct/>} />
    </Routes>
    </Router>
  )
}

export default App
