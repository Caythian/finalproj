import React from 'react';
import './Footer.css'; // Make sure to create Footer.css in the same directory

function Footer() {
  const year = new Date().getFullYear(); 
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {year} Created by Xuecong Wang. All Rights Reserved.</p>
        <div className="footer-socials">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
