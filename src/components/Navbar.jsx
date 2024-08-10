import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

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
                    <Link to="/skills">Skills</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/abouts">About me</Link>
                </li>
            </ul>
        </div>
    </nav>
);
};

export default Navbar;