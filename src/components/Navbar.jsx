import React from 'react';
import '../styles/Navbar.css';
import { Link } from "react-router-dom";
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation">
        <div className="navbar-left">
            <Link to="/" className="logo">
                Connor White
            </Link>
        </div>
        <div className="navbar-center">
            
        </div>
        <div className="navbar-right">
            <ul className="nav-links">
                <li>
                    <Link className="link-props" to="/skills">Skills</Link>
                </li>
                <li>
                    <Link className="link-props" to="/projects">Projects</Link>
                </li>
                <li>
                    <Link className="link-props" to="/about">About me</Link>
                </li>
                
            </ul>
        </div>
    </nav>
);
};

export default Navbar;