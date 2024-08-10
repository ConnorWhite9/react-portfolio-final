import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation">
        <div className="navbar-left">
            <a href="/" className="logo">
                Connor White
            </a>
        </div>
        <div className="navbar-center">
            
        </div>
        <div className="navbar-right">
            <ul className="nav-links">
                <li>
                    <a href="/products">Skills</a>
                </li>
                <li>
                    <a href="/about">Projects</a>
                </li>
                <li>
                    <a href="/contact">About me</a>
                </li>
            </ul>
        </div>
    </nav>
);
};

export default Navbar;