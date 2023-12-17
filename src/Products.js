import React from 'react'
import {Link } from 'react-router-dom'
import data from './data.js';
const Products = () => {
  const [datas,setDatas]=React.useState(data);
  return (
    <div className='products'>
      {
        datas.map((data)=>{
          const {id,photo_url,price,name}=data;
          return<article>
          <img src={photo_url} alt={id}/>
          <p>{name}</p><br/>
          <h3>${price}</h3><br/>
          <button className="info">
          <Link to={`/products/${id}`} className='info-btn'>INFO</Link>
          </button>
          </article>
        })
        
      }
      
    </div>
  )
}

export default Products
