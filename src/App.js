import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import Home from './Home';
import HomeFR from './HomeFR';  
import About from './About';
import AboutFR from './AboutFR'; 
import Articles from './Articles';
import Browse from './Browse';
import Tutorials from './Tutorials';
import Forums from './Forums';

function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
  };

  return (
    <BrowserRouter basename="/SEG3525_Projet2">
      <div className="App">
        <Header />
        <NavBar onLanguageChange={handleLanguageChange} language={language} />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={language === 'en' ? <Home /> : <HomeFR />} />
            <Route path="/about" element={language === 'en' ? <About /> : <AboutFR />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/forums" element={<Forums />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
