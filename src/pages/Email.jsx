import React from 'react';
import EmailForm from '../components/EmailForm';
import '../styles/Email.css'

const Email = () => {
    return (
        <>
            <div className="email-container"> 
                <h1 className="email-title">Send An Email</h1>
                <EmailForm />
            </div>
        
        
        </>
    );
}

export default Email;