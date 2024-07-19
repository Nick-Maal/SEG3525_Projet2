import React from 'react';
import './FAQPage.css';

function FAQPage() {
  return (
    <main className="faq-page">
      <h1>Frequently Asked Questions (FAQ)</h1>
      <div className="faq-section">
        <h2>What is Pixel Nexus?</h2>
        <p>Pixel Nexus is a platform that connects video game communities, offering news, reviews, guides, forums, and a marketplace for used games.</p>
      </div>
      <div className="faq-section">
        <h2>How can I look at used games?</h2>
        <p>You can browse our marketplace, filter by genre and price, and find games listed.</p>
      </div>
      <div className="faq-section">
        <h2>How do I participate in the forums?</h2>
        <p>Join our forums by creating a forum yourself or leaving a comment on another one. You can then post, comment, and interact with other gamers in various discussion threads.</p>
      </div>
      <div className="faq-section">
        <h2>Can I submit my own articles?</h2>
        <p>Currently, we are not accepting user-submitted articles, but stay tuned for future updates where we may offer this feature.</p>
      </div>
    </main>
  );
}

export default FAQPage;
