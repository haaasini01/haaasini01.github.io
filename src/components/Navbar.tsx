import React from 'react';
import '../styles/hero.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="brand-icon">✦</span>
        <span className="brand-name">Hasini Reddy</span>
      </div>
      <div className="nav-links">
        <a href="#about">About me</a>
        <a href="#resume">Resume</a>
        <a href="#work">Work</a>
        <a href="#contact" className="nav-cta">Get in touch!</a>
      </div>
    </nav>
  );
};

export default Navbar;
