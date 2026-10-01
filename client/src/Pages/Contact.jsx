import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import './PageStyle.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent to our pit crew.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-container">
      {/* HERO SECTION */}
      <div className="page-hero contact-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">GET IN TOUCH</h1>
          <p className="hero-subtitle">Have a question, feedback, or a car request? Drop us a line.</p>
        </div>
      </div>

      <div className="page-content contact-layout">
        
        {/* LEFT: CONTACT INFO */}
        <div className="contact-info-col">
          <h2 className="section-title"><MessageSquare className="text-gold" size={28} /> CONTACT US</h2>
          <p className="contact-desc">
            Our support team and automotive experts are always ready to help you navigate our platform 
            or discuss your custom build inquiries.
          </p>

          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon-wrapper"><Phone className="text-cyan" /></div>
              <div>
                <h4>Phone</h4>
                <p>+81 90-1234-5678</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon-wrapper"><Mail className="text-gold" /></div>
              <div>
                <h4>Email</h4>
                <p>zenistuagatsuma03092007@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrapper"><MapPin className="text-purple" /></div>
              <div>
                <h4>Headquarters</h4>
                <p>2-8-14 Shibaura, Minato-ku,<br/>Tokyo 108-0023, Japan</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <div className="contact-form-col">
          <form className="luxury-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Driver Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="driver@example.com" 
                required 
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <select name="subject" value={formData.subject} onChange={handleChange} required>
                <option value="" disabled>Select a topic</option>
                <option value="support">Technical Support</option>
                <option value="car_request">Request a Car Model</option>
                <option value="business">Business Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5" 
                placeholder="How can we help you accelerate?" 
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <Send size={18} /> SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;