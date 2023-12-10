import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Make sure to create Footer.css in the same directory

function Footer() {
  const year = new Date().getFullYear(); 
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {year} Created by Xuecong Wang. All Rights Reserved.</p>
        <div className="footer-socials">
        <Link to='/'>Home</Link>
        <Link to='/gamedesign'>Immersive Design</Link>
        <Link to='/escapism'>Escapism</Link>
        {/* <Link to='/more'>Future</Link> */}
        <Link to='/about'>About</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
