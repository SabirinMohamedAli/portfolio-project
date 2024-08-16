import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

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
    <div className="bg-dark-blue text-white flex flex-col items-center justify-center min-h-screen border-4 border-gray-300 rounded-lg shadow-lg">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 p-10 md:p-20">
        {/* Left Section - Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold" style={{fontSize:'30px' , color:'white' , fontWeight:'bold'}}>Let's talk</h2>
          <p>Ask us anything or just say hi...</p>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaPhoneAlt className="text-xl mr-4" />
              <span style={{fontSize:'15px' , color:'white' , fontWeight:'bold'}} > phone +612011700</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-xl mr-4" />
              <span  style={{fontSize:'15px' , color:'white' , fontWeight:'bold'}}>thaprinmohamett1333@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <div className="flex flex-col">
            <label className="text-dark-blue mb-2">Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              className="p-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-dark-blue mb-2">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="example@yourdomain.com" 
              value={formData.email} 
              onChange={handleChange} 
              className="p-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-dark-blue mb-2">Message</label>
            <textarea 
              name="message" 
              placeholder="Hi there..." 
              value={formData.message} 
              onChange={handleChange} 
              className="p-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500 h-32"
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 w-full">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
