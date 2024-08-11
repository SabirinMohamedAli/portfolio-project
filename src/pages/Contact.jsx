import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-6 bg-purple-900 text-white">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          className="p-2 rounded-lg bg-gray-200 text-gray-800" 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          className="p-2 rounded-lg bg-gray-200 text-gray-800" 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          className="p-2 rounded-lg bg-gray-200 text-gray-800" 
        />
        <button 
          type="submit" 
          className="bg-purple-700 hover:bg-purple-600 text-white p-2 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
