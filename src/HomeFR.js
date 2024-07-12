import React from 'react';
import './Home.css';  
import logo from './logo.jpeg';

function Home({ language }) {
  return (
    <main className="home-page">
      <div className="image-collage">
        <div className="logo-container" aria-label="Pixel Nexus logo">
          <img src={logo} alt="Logo" />
          <span className="sr-only">Pixel Nexus logo</span> 
        </div>
      </div>

      <div className="contact-section">
        <h2>{language === 'en' ? 'Contact Us' : 'Nous Contacter'}</h2>
        <address>
          {language === 'en' ? (
            <>
              123 Test<br />
              Ottawa, Ontario R3S PO2<br />
              Phone: (123) 456-7890<br />
              Email: info@pixelnexus.com
            </>
          ) : (
            <>
              123 Test<br />
              Ottawa, Ontario R3S PO2<br />
              Téléphone : (123) 456-7890<br />
              Courriel : info@pixelnexus.com
            </>
          )}
        </address>
      </div>
    </main>
  );
}

export default Home;
