import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import './App.css';
import {Link} from 'react-router-dom'
const Navbar = () => {
  const[open,setOpen]=useState(true);
  const handleSubmit=()=>{
    setOpen(!open);
  }
  
  return (
    <div className="navbar">
    <button onClick={handleSubmit} className="btn-open"><FiMenu/></button>
      <div className="navbar-main">
      <Link to="/"  activeClassName="active" className="link" >HOME</Link>
      <Link to="/about" className="link">ABOUT</Link>
      <Link to="/contact" className="link">CONTACT</Link>
      </div>
      {
      open?
      <div className="navbar-left" >
      <button onClick={handleSubmit} className="btn-close"><IoClose/></button>
      <ul>
       <li><Link to="/" className="link">HOME</Link></li>
       <li><Link to="/about" className="link">ABOUT</Link></li>
       <li><Link to="/contact" className="link">CONTACT</Link></li>
       </ul>
     </div>:null
    }
    </div>
  )
}

export default Navbar;
