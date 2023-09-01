import React from 'react';
import "./Product.scss";
import { IProduct } from '../../types/GlobalTypes';

const Product = (props:IProduct) => {
  return (
    <div className='product'>
        <img src={`data:image/jpeg;base64,${props.firstImage}`} alt="Product" />
        <div className="text">
            <h1>{props.name}</h1>
            <p>{props.shortDescription}</p>
            <h2>{props.number}</h2>
            <h2>{props.price}</h2>
        </div>
    </div>
  )
}

export default Product