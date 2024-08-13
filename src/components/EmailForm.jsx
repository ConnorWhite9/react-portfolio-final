import React, {useState} from 'react';
import '../styles/EmailForm.css';
import emailjs from 'emailjs-com';



 



const EmailForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
          .then((result) => {
            console.log('Message sent successfully!');
            setFormData({
              name: '',
              email: '',
              message: '',
            });
          })
          .catch((error) => {
            console.log('An error occurred. Please try again.');
            console.error('Error sending email:', error);
          });
    
    }

    return (
        <form onSubmit={handleSubmit} className="emailForm">
            <h2 className="my-email">connorwhite771@gmail.com</h2>
            <div className="label-container">
                <label htmlFor="name">Name:</label>
                <textarea className="email-input" id="name" name="name" value={formData.name} onChange={handleChange} required/>
            </div>
            <div className="label-container">
                <label htmlFor="email">Email:</label>
                <textarea className="email-input" id="email" name="email" value={formData.email} onChange={handleChange} required/>
            </div>
            

            <div className="label-container">
                <label htmlFor="message">Message:</label>
                <textarea className="email-input" id="message" name="message" value={formData.message} onChange={handleChange} required/>
            </div>
        
            <button className="button-41" type="submit">Send Email</button>
        </form>
    );
}

export default EmailForm;