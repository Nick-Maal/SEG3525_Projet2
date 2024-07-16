import React, { useState } from 'react';
import './Articles.css';
import cyberpunkImage from './images/cyberpunk.jpeg';
import esportsImage from './images/esports.jpg';
import hadesImage from './images/hades.jpeg';
import beatsaberImage from './images/beatsaber.jpeg';
import gamingImage from './images/gaming.jpeg';

function Articles() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articleLikes, setArticleLikes] = useState({});
  const [articleComments, setArticleComments] = useState({
    1: [
      { name: 'GamerGirl123', comment: 'Amazing article! This game is a must-play.' },
      { name: null, comment: 'I disagree with some points, but overall, it was informative.' }
    ],
    2: [{ name: 'ProGamer', comment: 'eSports are definitely taking over!' }],
    3: [{ name: null, comment: 'Great list! I haven\'t heard of some of these.' }],
    4: [],
    5: [{ name: 'MentalHealthAdvocate', comment: 'Important topic, thanks for raising awareness.' }],
    6: [],
    7: [],
    8: [],
    9: [],
  });

  const [newComment, setNewComment] = useState('');
  const [newCommentName, setNewCommentName] = useState('');

  const articles = [
    { 
      id: 1, 
      title: 'New Game Release Shatters Records', 
      image: cyberpunkImage, 
      content: 'The highly anticipated game "Cyberpunk 2077" has finally been released, and it has already smashed sales records, exceeding all expectations. With its immersive open-world environment, captivating storyline, and stunning visuals, "Cyberpunk 2077" is poised to become a landmark title in the gaming industry.', 
      author: 'John Doe', 
      date: 'July 1, 2024' 
    },
    { id: 2, title: 'The Rise of eSports: A Global Phenomenon', image: esportsImage, content: 'Competitive gaming, or eSports, has experienced explosive growth in recent years. Millions of viewers tune in to watch professional players compete in tournaments with massive prize pools. This article explores the factors behind the rise of eSports and its impact on the gaming landscape.', author: 'Jane Smith', date: 'June 28, 2024' },
    { id: 3, title: 'Top 10 Indie Games You Must Play', image: hadesImage, content: 'The indie game scene is thriving, offering a wealth of creative and innovative experiences. This article highlights ten must-play indie titles that you might have missed, covering various genres and gameplay styles.', author: 'Alex Johnson', date: 'June 25, 2024' },
    { id: 4, title: 'Virtual Reality: The Future of Gaming?', image: beatsaberImage, content: 'Virtual reality (VR) technology has the potential to revolutionize gaming, offering unparalleled immersion and interactivity. This article delves into the current state of VR gaming, its challenges, and its exciting possibilities for the future.', author: 'Emily Davis', date: 'June 20, 2024' },
    { id: 5, title: 'The Impact of Gaming on Mental Health', image: gamingImage, content: 'Video games can have both positive and negative effects on mental health. This article examines the research on gaming and mental well-being, discussing its potential benefits for cognitive skills and social connection, as well as its risks for addiction and isolation.', author: 'Michael Brown', date: 'June 15, 2024' },
  ];

  const openArticle = (article) => {
    setSelectedArticle(article);
  };

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  const handleLike = (articleId) => {
    setArticleLikes(prevLikes => ({
      ...prevLikes,
      [articleId]: (prevLikes[articleId] || 0) + 1,
    }));
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      const comment = {
        name: newCommentName.trim() !== '' ? newCommentName : null,
        comment: newComment
      };

      setArticleComments(prevComments => ({
        ...prevComments,
        [selectedArticle.id]: [...(prevComments[selectedArticle.id] || []), comment]
      }));

      setNewComment('');
      setNewCommentName('');
    }
  };

  return (
    <main className="articles-page">
      <h1>Articles</h1>
      <div className="article-grid">
        {articles.map(article => (
          <div className="article-card" key={article.id} onClick={() => openArticle(article)}>
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>

      {selectedArticle && ( 
        <div className="article-modal">
          <div className="article-modal-content">
            <button className="close-button" onClick={closeArticle}>&times;</button>
            <img src={selectedArticle.image} alt={selectedArticle.title} className="article-image" />
            <h2>{selectedArticle.title}</h2>
            <p className="article-details">By {selectedArticle.author} | {selectedArticle.date}</p>
            <p className="article-content">{selectedArticle.content}</p>

            <div className="like-section">
              <button onClick={() => handleLike(selectedArticle.id)}>Like</button>
              <span>{articleLikes[selectedArticle.id] || 0} Likes</span>
            </div>
            <div className="comments-section">
              <h3>Comments</h3>
              <ul>
                {articleComments[selectedArticle.id].map((comment, index) => (
                  <li key={index}>
                    <b>{comment.name}:</b> {comment.comment}
                  </li>
                ))}
              </ul>

              <div className="comment-form">
                <input 
                  type="text" 
                  placeholder="Your name (optional)"
                  value={newCommentName}
                  onChange={(e) => setNewCommentName(e.target.value)} 
                />
                <textarea 
                  placeholder="Write your comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={handleCommentSubmit}>Submit Comment</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Articles;
