import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    console.log(props.cart);
    let totalPrice = 0;
    let totalShopping = 0;
    let totalQuantity = 0;
    for (let product of props.cart) {
        // product.quantity = product.quantity || 1;
        totalPrice = (totalPrice + product.price) * product.quantity;
        totalShopping = totalShopping + product.price;
        totalQuantity = totalQuantity + product.quantity;
    }

    let tax = totalPrice * 15 / 100;
    let grandTotal = totalPrice + totalShopping + tax;
    return (
        <div className='cart-position'>
            <h2>Order Summary</h2>
            <p>Selected Items: {totalQuantity}</p>
            <p>Total price: {totalPrice}</p>
            <p>Shipping: {totalShopping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total:{grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;