import React, { useState } from 'react';
import { FaGithub, FaFacebook } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Section with id ${sectionId} not found!`);
    }
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-white text-dark-blue fixed top-0 w-full z-50 border-b border-gray-300">
      <h1 className="text-2xl font-bold" style={{ fontFamily: 'cursive', borderBottom: '2px solid #2ECC71', color: '#2C3E50' }}>
        Hi, I am Adnan
      </h1>
      <button
        className="text-dark-blue block sm:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:flex space-x-6 sm:space-x-4 items-center`}
      >
        <li className="hover:text-green transition duration-300">
          <button className="flex items-center space-x-2" onClick={(e) => handleScroll(e, 'home')}>
            <span>Home</span>
          </button>
        </li>
        <li className="hover:text-green transition duration-300">
          <button className="flex items-center space-x-2" onClick={(e) => handleScroll(e, 'about')}>
            <span>About</span>
          </button>
        </li>
        <li className="hover:text-green transition duration-300">
          <button className="flex items-center space-x-2" onClick={(e) => handleScroll(e, 'services')}>
            <span>Services</span>
          </button>
        </li>
        <li className="hover:text-green transition duration-300">
          <button className="flex items-center space-x-2" onClick={(e) => handleScroll(e, 'projects')}>
            <span>Projects</span>
          </button>
        </li>
        <li className="hover:text-green transition duration-300">
          <button className="flex items-center space-x-2" onClick={(e) => handleScroll(e, 'contact')}>
            <span>Contact Us</span>
          </button>
        </li>
        <li className="hover:text-green transition duration-300">
          <a href="https://github.com/AdnanKahiye" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl" />
          </a>
        </li>
        <li className="hover:text-green transition duration-300">
          <a href="https://www.facebook.com/profile.php?id=100077115147759&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
