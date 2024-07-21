import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({ onLanguageChange, language }) {
  return (
    <nav>
      <ul>
        <li><Link to="/">{language === 'en' ? 'Home' : 'الرئيسية'}</Link></li>
        <li><Link to="/about">{language === 'en' ? 'About Us' : 'معلومات عنا'}</Link></li>
        <li className="dropdown">
          <Link to="#">{language === 'en' ? 'Resources' : 'الموارد'}</Link>
          <div className="dropdown-content">
            <Link to="/articles">{language === 'en' ? 'Articles' : 'مقالات'}</Link>
            <Link to="/tutorials">{language === 'en' ? 'Tutorials' : 'دروس'}</Link>
          </div>
        </li>
        <li><Link to="/browse">{language === 'en' ? 'Browse' : 'تصفح'}</Link></li>
        <li><Link to="/forums">{language === 'en' ? 'Forums' : 'المنتديات'}</Link></li>
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
