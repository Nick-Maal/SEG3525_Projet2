import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({ onLanguageChange, language }) {
  return (
    <nav> 
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/browse">Browse</Link></li>
        <li><Link to="/tutorials">Tutorials</Link></li>
        <li><Link to="/forums">Forums</Link></li>
        <li>
          <button className="language-button" onClick={onLanguageChange}>
            {language === 'en' ? 'Français' : 'English'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
