import React from 'react';
import { Link } from 'react-router-dom';  
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Pixel Nexus</p>
      <Link to="/faq" className="footer-link">FAQ</Link>
    </footer>
  );
}

export default Footer;
