import React from 'react';
import '../styles/Contact.css';
import {Link} from 'react-router-dom';
import gmail from '../assets/icons8-gmail.svg';
import linkedin from '../assets/icons8-linkedin.svg';
import github from '../assets/icons8-github.svg';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Links</h1>
            <div className="link-container">
                <div className="link-set">
                    <a className="contact-link" href="https://github.com/ConnorWhite9">
                        <img className="contact-icon" src={github} />
                        <h2 className="link-name">GitHub</h2>
                    </a>
                </div>
                
                <div className="link-set">
                    <a className="contact-link" href="https://www.linkedin.com/in/connor-white-8106972a0/">
                        <img className="contact-icon" src={linkedin} />
                        <h2 className="link-name">LinkedIn</h2>
                    </a>
                </div>
                <div className="link-set">
                    <div className="contact-link">
                        <img className="contact-icon" src={gmail} />
                        <Link className="link-name"  to="/Email" role="navigation">Gmail</Link>
                    </div>
                </div>
            </div>

        
        </div>
    );
}

export default Contact;