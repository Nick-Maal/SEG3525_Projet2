import React, { useState, useEffect } from 'react';
import './Home.css';
import logo from './logo.jpeg';

function Home() {

  return (
    <main className="home-page">
      <div className="image-collage">
        <img src={logo} alt="Logo" />
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <address>
          123 Test<br />
          Ottawa, Ontario R3S PO2<br />
          Phone: (123) 456-7890<br />
          Email: info@pixelnexus.com
        </address>
      </div>
    </main>
  );
}

export default Home;
