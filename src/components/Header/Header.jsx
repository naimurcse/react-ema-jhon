import React from 'react';
import Logo from '../../images/Logo.svg'
import "./Header.css";

const Header = () => {
    return (
        <nav className='header'>
            
                <div className="nav-container">
                    <img src={Logo} alt="" />
                    <div>
                        <a href="/shop">Shop</a>
                        <a href="/order">Order</a>
                        <a href="/inventory">Inventory management</a>
                        <a href="/login">Log in</a>
                    </div>
              
            </div>
            
        </nav>
    );
};

export default Header;