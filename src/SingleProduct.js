import React from 'react'
import { useParams } from 'react-router-dom'
import {Link } from 'react-router-dom'
import data from './data.js';
const SingleProduct = () => {
  const {pid}= useParams();
  const productId = data.find((dts)=>dts.id == pid);
  console.log(productId);
  const {photo_url,description,id,created_at,updated_at,name,price,category}=productId;
  return (
    <div className='singleproduct'>
    <div className='left'>
      <img src={photo_url} alt={name}/>
      </div>
      <div className='right'>
      <p><span>Name</span> {name}</p><br/>
      <p><span>Price</span> ${price}</p><br/>
      <p><span>Category </span>{category}</p><br/>
      <p><span>Created_at</span> {created_at}</p><br/>
      <p><span>Updated_at</span> {updated_at}</p><br/>
      <p><span>description </span>{description}</p><br/>
      <button className='btn'><Link to="/products" className='btn-link'>BACK</Link></button>
      </div>
    </div>
  )
}

export default SingleProduct
