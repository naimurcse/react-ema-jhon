import React from 'react';
import "./Shop.css";
import Cart from '../Cart/Cart';

const Shop = () => {

    return (
        <div className='shop-container'>
            
            <div>
                <div className="product-container">
                    
                </div>
            </div>

            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;