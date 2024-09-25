import React from 'react';


function ContactPage() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">We'd love to hear from you! Fill out the form below and we'll get in touch with you shortly.</p>
      
      <form className="contact-form">
        <input 
          type="text" 
          className="contact-input" 
          placeholder="Your Name" 
        />
        <input 
          type="email" 
          className="contact-input" 
          placeholder="Your Email" 
        />
        <textarea 
          className="contact-textarea" 
          placeholder="Your Message" 
        ></textarea>
        <button type="submit" className="contact-submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
