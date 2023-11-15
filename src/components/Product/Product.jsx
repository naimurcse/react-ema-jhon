import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = () => {
   return (
        <div className='product-cart'>
            <img className='product-image' src="" alt="" />
            <div className='product-content'>
                <h3></h3>
                <h4 className='price'>Price: </h4>
                <p>Manufacturer : </p>
                <p>Rating : </p>
            </div>
            <button className='add-to-cart'>Add to Cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    );
};

export default Product;