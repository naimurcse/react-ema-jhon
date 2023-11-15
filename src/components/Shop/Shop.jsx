import React, { useEffect, useState } from 'react';
import "./Shop.css";
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data=>setProducts(data))
    }, [])
    // console.log(products);

    
    const handleAddToCart = (product) => {
    const newCart = [...cart,product]
        setCart(newCart);
    }
    // console.log(cart);

    return (
        <div className='shop-container'>  
            <div>
                <div className="product-container">
                    {
                        products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;