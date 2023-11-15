import React, { useEffect, useState } from 'react';
import "./Shop.css";
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDatabase, getShoppingCart } from '../../utilities/fake';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data=>setProducts(data))
    }, [])
    // console.log(products);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const newCart = [];
        
        for (let productId in storedCart) {
            console.log(productId);
            const exist = products.find(pd => pd.id === productId);
            console.log(exist);
            if (exist) {
                exist.quantity = storedCart[productId];
                newCart.push(exist);
            }
        }
        console.log(newCart);
        setCart(newCart);
    },[products])
    
    const handleAddToCart = (product) => {
        // const newCart = [...cart, product]
        let newCart = [];
        let exists = cart.find(pd => pd.id === product.id);
        if (exists) {
            exists.quantity = exists.quantity + 1;
            let remaining = cart.filter(pd=> pd.id !== product.id);
            newCart = [...remaining, exists]; 
        } else {
            product.quantity = 1;    
            newCart = [...cart, product];
        }

        setCart(newCart);
        addToDatabase(product.id);

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