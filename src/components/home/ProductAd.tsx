import React from 'react';
import "./ProductAd.scss";
import { IProduct } from '../../types/GlobalTypes';

const ProductAd = (props:IProduct) => {
  return (
    <div className='card'>
      <img src={`data:image/jpeg;base64,${props.firstImage}`} alt='Product' />
      <div className="content">
        <h3>{props.name}</h3>
        <h4>{props.price} PLN</h4>
      </div>
    </div>
  )
}

export default ProductAd