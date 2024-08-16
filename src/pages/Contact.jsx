import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import contactImage from '../images/5.webp';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    console.log('Submitting contact form:', { name, email, message });

    setName('');
    setEmail('');
    setMessage('');
    setError('');

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100  border-gray-300 rounded-lg shadow-lg">
      <main className="flex-grow p-4 sm:p-8">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4 sm:p-8">
              <h1 className="text-4xl font-bold mb-4 flex items-center">
                <FaEnvelope className="mr-2" /> Contact Us
              </h1>
              <p className="text-gray-700 mb-4">
                Feel free to get in touch with us. I always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="bg-white shadow-md rounded p-4">
                {submitted && (
                  <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
                    <p className="font-bold">Thank you for your feedback!</p>
                    <p>We appreciate you contacting us.</p>
                  </div>
                )}
                {error && (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                    <p className="font-bold">Error</p>
                    <p>{error}</p>
                  </div>
                )}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Your Message"
                    rows="4"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center , text-center"
                >
                  <FaPaperPlane className="mr-2" /> Submit
                </button>
              </div>
            </div>
            <div className="md:w-1/2 p-4 sm:p-8 flex items-center justify-center">
              <img src={contactImage} alt="Contact" className="rounded-lg shadow-md object-cover" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
