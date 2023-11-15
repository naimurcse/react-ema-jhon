import React from 'react';
import "./Cart.css";

const Cart = () => {
    
    return (
        <div className='cart-position'>
            <h2>Order Summary</h2>
            <p>Selected Items:</p>
            <p>Total price: </p>
            <p>Shipping: </p>
            <p>Tax:</p>
            <p>Grand Total:</p>
        </div>
    );
};

export default Cart;