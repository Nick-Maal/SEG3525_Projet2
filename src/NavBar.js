import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({ onLanguageChange, language }) {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li className="dropdown">
          <Link to="#">Ressources</Link>
          <div className="dropdown-content">
            <Link to="/articles">Articles</Link>
            <Link to="/tutorials">Tutorials</Link>
          </div>
        </li>
        <li><Link to="/browse">Browse</Link></li>
        <li><Link to="/forums">Forums</Link></li>
        <li>
          <button className="language-button" onClick={onLanguageChange}>
            {language === 'en' ? 'العربية' : 'English'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
