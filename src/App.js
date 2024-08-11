import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

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
      <h1 className="text-2xl font-bold">KAAHIYE</h1>
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
        <NavItem to="/" label="Home" />
        <NavItem to="/about" label="About" />
        <NavItem to="/services" label="Services" />
        <NavItem to="/projects" label="Projects" />
        <NavItem to="/contact" label="Contact Us" />
      </ul>
    </nav>
  );
}

function NavItem({ to, label }) {
  return (
    <li className="hover:text-green transition duration-300">
      <Link to={to} className="flex items-center space-x-2">
        <span>{label}</span>
      </Link>
    </li>
  );
}

export default App;
