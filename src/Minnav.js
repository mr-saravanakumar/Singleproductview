import React from 'react'
import { Link } from 'react-router-dom';
const Minnav = () => {
  return (
    <div>
    <ul>
    <li><Link to="/" className="link">HOME</Link></li>
     <li><Link to="/about" className="link">ABOUT</Link></li>
     <li><Link to="/contact" className="link">CONTACT</Link></li>
     <li><Link to="/products"className="link">PRODUCTS</Link></li>
     </ul>
    </div>
  )
}

export default Minnav;
