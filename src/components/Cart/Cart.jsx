import React from 'react';
import "./Cart.css";

const Cart = ({cart}) => {
    console.log(cart);
    let totalPrice = 0;
    let shippingPrice = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        shippingPrice = shippingPrice +product.shipping;
    }

    let tax = totalPrice * 15 / 100;
    let grandTotal = totalPrice + shippingPrice + tax;
    return (
        <div className='cart-position'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: {totalPrice}</p>
            <p>Shipping: {shippingPrice}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;