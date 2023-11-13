import React from 'react';
import Logo from '../../images/Logo.svg'
import "./Header.css";

const Header = () => {
    return (
        <nav className='header'>
            <div className="container">
                <div className="nav-container">
                    <img src={Logo} alt="" />
                    <h1>MEHNAZ SHAZNEEN</h1>
                </div>
            </div>
            
        </nav>
    );
};

export default Header;