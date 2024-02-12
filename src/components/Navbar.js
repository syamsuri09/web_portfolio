import React, { useState } from 'react';
import '../App.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div>
          <p>
            I'm <span>syam</span>
          </p>
        </div>

        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes color="rgb(0, 0, 0)" />
          ) : (
            <FaBars color="rgb(0, 0, 0)" />
          )}
        </div>
      </nav>
    </div>
  );
};
