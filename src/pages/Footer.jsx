import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark-blue text-white py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {/* Logo and About Us */}
        <div>
          <h2 className="text-lg font-bold mb-4">Kaahiye</h2>
          <p className="text-sm mb-4">Your Tagline Here</p>
          <p className="text-sm">We want to help bring talented students and unique startups together.</p>
          <div className="mt-4">
            <h3 className="text-sm font-bold mb-2">Contact Us</h3>
            <p className="text-sm">📞 +612011700</p>
            <p className="text-sm">📧 thaprinmohamett1333@gmail.com</p>
          </div>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Information</h3>
          <ul>
            <li className="mb-2 text-sm"><a href="#Home" className="hover:text-green">Home</a></li>
            <li className="mb-2 text-sm"><a href="#About" className="hover:text-green">About Us</a></li>
            <li className="mb-2 text-sm"><a href="#Projects" className="hover:text-green">Projects</a></li>
            <li className="mb-2 text-sm"><a href="#Services" className="hover:text-green">Services</a></li>
            <li className="text-sm"><a href="#Contact" className="hover:text-green">Contact Us</a></li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Helpful Links</h3>
          <ul>
            <li className="mb-2 text-sm"><a href="#services" className="hover:text-green">Services</a></li>
            <li className="mb-2 text-sm"><a href="#support" className="hover:text-green">Support</a></li>
            <li className="mb-2 text-sm"><a href="#terms" className="hover:text-green">Terms & Conditions</a></li>
            <li className="text-sm"><a href="#privacy" className="hover:text-green">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Subscribe and Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe for More Info</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-2 w-full rounded-lg mb-4 text-black"
            />
            <button className="bg-green text-white px-6 py-2 rounded-lg w-full hover:bg-green-dark transition duration-300">
              Subscribe
            </button>
          </form>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl hover:text-green transition duration-300" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-green transition duration-300" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-green transition duration-300" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-green transition duration-300" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-green transition duration-300" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>© 2024 Kaahiye All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
