import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Social Media Links</h1>
            <div className="link-container">
                <div className="link-set">
                    <h2 className="link-name">GitHub</h2>
                    <p className="link"><a></a></p>
                </div>
                <div className="link-set">
                    <h2 className="link-name">LinkedIn</h2>
                    <p className="link"><a></a></p>
                </div>
                <div className="link-set">
                    <h2 className="link-name">Gmail</h2>
                    <p className="link"><a></a></p>
                </div>
            </div>

        
        </div>
    );
}

export default Contact;