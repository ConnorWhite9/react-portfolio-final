import React, {useState} from 'react';
import '../styles/HamburgerMenu.css';
import {Link} from 'react-router-dom';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };


    return (
        <>
            <div className="menu-toggle" onClick={toggleMenu}>
                <span className={`bar ${isOpen ? 'bar-active' : ''}`}></span>
                <span className={`bar ${isOpen ? 'bar-active' : ''}`}></span>
                <span className={`bar ${isOpen ? 'bar-active' : ''}`}></span>
            </div>
            <ul className={`nav-links2 ${isOpen ? 'active' : ''}`}>
                <li>
                    <Link className="link-props2" to="/skills">Skills</Link>
                </li>
                <li>
                    <Link className="link-props2" to="/projects">Projects</Link>
                </li>
                <li>
                    <Link className="link-props2" to="/about">About me</Link>
                </li>
            </ul>
        </>


    );
}

export default HamburgerMenu;