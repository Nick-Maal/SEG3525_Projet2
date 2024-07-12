import React from 'react';
import './About.css';  
import teamImage from './imageTeam.png';

function About({ language }) {
  return (
    <main className="about-page">
      <h1>{language === 'en' ? 'About Us' : 'À Propos de Nous'}</h1>

      <div className="about-content">
        <div className="team-image">
          <img src={teamImage} alt="Our Team" />
        </div>
        <div className="company-info">
          <h2>{language === 'en' ? 'Our Company' : 'Notre Entreprise'}</h2>
          <p>
            {language === 'en' ? (
              <>
                Pixel Nexus is a passionate gaming hub founded by gamers, for gamers. In our first year, we've established ourselves as a trusted destination for buying and selling pre-owned gaming products, offering a curated selection of consoles, games, accessories, and collectibles at competitive prices. But we're more than just a marketplace. We believe in the power of community. That's why we've created a welcoming space where gamers can connect, share experiences, and celebrate their love for gaming. Through online forums, tournaments, and engaging events, we strive to foster a vibrant community that goes beyond transactions. Whether you're a seasoned pro or just starting your gaming journey, we're here to provide you with quality products, exceptional service, and a sense of belonging. Join us as we continue to build a gaming community that's inclusive, passionate, and always ready for the next adventure.
              </>
            ) : (
              <>
                Pixel Nexus est un centre de jeu passionné fondé par des joueurs, pour des joueurs. Au cours de notre première année, nous nous sommes établis comme une destination de confiance pour l'achat et la vente de produits de jeu d'occasion, offrant une sélection soigneusement choisie de consoles, de jeux, d'accessoires et de produits de collection à des prix compétitifs. Mais nous sommes plus qu'un simple marché. Nous croyons au pouvoir de la communauté. C'est pourquoi nous avons créé un espace accueillant où les joueurs peuvent se connecter, partager des expériences et célébrer leur amour pour le jeu. À travers des forums en ligne, des tournois et des événements captivants, nous nous efforçons de promouvoir une communauté dynamique qui va au-delà des transactions. Que vous soyez un professionnel chevronné ou que vous commenciez tout juste votre voyage dans le jeu, nous sommes là pour vous fournir des produits de qualité, un service exceptionnel et un sentiment d'appartenance. Rejoignez-nous alors que nous continuons à construire une communauté de jeu qui est inclusive, passionnée et toujours prête pour la prochaine aventure.
              </>
            )}
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
