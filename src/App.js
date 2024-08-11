import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { AiFillHome, AiOutlineUser, AiOutlineAppstore, AiOutlineFundProjectionScreen, AiOutlinePhone } from 'react-icons/ai';

function App() {
  return (
    <Router>
      <div className="bg-white text-dark-blue min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-6 bg-dark-blue text-white">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <button
        className="text-white block sm:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:flex space-x-6 sm:space-x-4`}
      >
        <NavItem to="/" icon={<AiFillHome />} label="Home" />
        <NavItem to="/about" icon={<AiOutlineUser />} label="About" />
        <NavItem to="/services" icon={<AiOutlineAppstore />} label="Services" />
        <NavItem to="/projects" icon={<AiOutlineFundProjectionScreen />} label="Projects" />
        <NavItem to="/contact" icon={<AiOutlinePhone />} label="Contact Us" />
      </ul>
    </nav>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <li className="hover:text-green transition duration-300">
      <Link to={to} className="flex items-center space-x-2">
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
}

export default App;
