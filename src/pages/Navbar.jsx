import React, { useState } from 'react';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

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
    // Close the menu after clicking on a link
    setIsOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-4 md:p-6 bg-white text-dark-blue fixed top-0 w-full z-50 border-b border-gray-300">
      <h1 className="text-xl md:text-2xl font-bold border p-1 md:p-2" style={{ fontFamily: 'cursive', border: '2px solid #34495E' }}>KAAHIYE</h1>
      <div className="sm:hidden">
        <button
          className="text-dark-blue focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-full left-0 w-full bg-white sm:relative sm:flex sm:space-x-4 md:space-x-6 items-center sm:bg-transparent sm:top-auto sm:left-auto`}
      >
        <li className="hover:text-green transition duration-300 text-center">
          <button className="block py-2 sm:inline-block" onClick={(e) => handleScroll(e, 'home')}>
            Home
          </button>
        </li>
        <li className="hover:text-green transition duration-300 text-center">
          <button className="block py-2 sm:inline-block" onClick={(e) => handleScroll(e, 'about')}>
            About
          </button>
        </li>
        <li className="hover:text-green transition duration-300 text-center">
          <button className="block py-2 sm:inline-block" onClick={(e) => handleScroll(e, 'services')}>
            Services
          </button>
        </li>
        <li className="hover:text-green transition duration-300 text-center">
          <button className="block py-2 sm:inline-block" onClick={(e) => handleScroll(e, 'projects')}>
            Projects
          </button>
        </li>
        <li className="hover:text-green transition duration-300 text-center">
          <button className="block py-2 sm:inline-block" onClick={(e) => handleScroll(e, 'contact')}>
            Contact Us
          </button>
        </li>
        <li className="hover:text-green transition duration-300 text-center sm:inline-block">
          <a href="https://github.com/AdnanKahiye" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl" />
          </a>
        </li>
        <li className="hover:text-green transition duration-300 text-center sm:inline-block">
          <a href="https://www.facebook.com/profile.php?id=100077115147759&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
