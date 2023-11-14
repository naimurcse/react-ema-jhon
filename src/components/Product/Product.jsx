import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { img, name, price, quantity, seller, stock } = props.product;
    console.log(props);
    
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product-cart'>
            <img className='product-image' src={img} alt="" />
            <div className='product-content'>
                <h3>{name}</h3>
                <h4 className='price'>Price: {price}</h4>
                <p>Manufacturer : </p>
                <p>Rating : </p>
            </div>
            <button className='add-to-cart' onClick={()=>handleAddToCart(props.product)} >Add to Cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    );
};

export default Product;