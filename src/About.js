import React from 'react';
import './About.css'; 
import teamImage from './imageTeam.png'; 

function About() {
  return (
    <main className="about-page" role="main">
      <header>
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <div className="team-image">
          <img src={teamImage} alt="Illustration of Pixel Nexus team during a meeting" aria-describedby="teamImageDesc" />
          <span id="teamImageDesc" className="sr-only">Drawn picture of the Pixel Nexus team collaborating during a meeting</span>
        </div>
        <div className="company-info" role="region" aria-labelledby="companyInfoHeader">
          <h2 id="companyInfoHeader">Our Company</h2>
          <p>
            Pixel Nexus is a passionate gaming hub founded by gamers, for gamers. In our first year, we've established ourselves as a trusted destination for buying and selling pre-owned gaming products, offering a curated selection of consoles, games, accessories, and collectibles at competitive prices.
          </p>
          <p>
            But we're more than just a marketplace. We believe in the power of community. That's why we've created a welcoming space where gamers can connect, share experiences, and celebrate their love for gaming. Through online forums, tournaments, and engaging events, we strive to foster a vibrant community that goes beyond transactions.
          </p>
          <p>
            Whether you're a seasoned pro or just starting your gaming journey, we're here to provide you with quality products, exceptional service, and a sense of belonging. Join us as we continue to build a gaming community that's inclusive, passionate, and always ready for the next adventure.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
