import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import './header.css'
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
    return <header className="header">
        <div className="logo">🌿 Paradise Nursery</div>
        <nav>
            <span>Plants</span>
        </nav>
        <Link to="/cart">
            <div className="cart"><ShoppingCart /><span className="cart-count">{cartCount}</span></div>
        </Link>
    </header>
};

export default Header;


