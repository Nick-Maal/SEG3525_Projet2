import React, { useState } from 'react';
import './Tutorials.css';

function Tutorials() {
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [tutorialLikes, setTutorialLikes] = useState({});
  const [tutorialComments, setTutorialComments] = useState({
    1: [
      { name: 'NewbieGamer', comment: 'This guide was super helpful, thank you!' },
      { name: 'ProPlayer', comment: 'Great tips for beginners!' }
    ],
    2: [{ name: 'StrategyMaster', comment: 'I didn\'t know about these strategies!' }],
    3: [{ name: null, comment: 'Helpful tutorial, I improved a lot.' }],
    4: [],
    5: [{ name: 'Techie', comment: 'Thanks for the step-by-step instructions.' }],
    6: [],
    7: [],
    8: [],
    9: [],
  });

  const [newComment, setNewComment] = useState('');
  const [newCommentName, setNewCommentName] = useState('');

  const tutorials = [
    { 
      id: 1, 
      title: 'Getting Started with "Cyberpunk 2077"', 
      image: 'tutorial1.jpg', 
      content: 'This beginner\'s guide will help you get started with "Cyberpunk 2077". Learn the basics of gameplay, character creation, and essential tips to survive in Night City.', 
      author: 'John Doe', 
      date: 'July 1, 2024' 
    },
    { id: 2, title: 'Mastering "League of Legends"', image: 'tutorial2.jpg', content: 'In this guide, we cover the basics of "League of Legends", including roles, champions, and strategies to help you climb the ranks.', author: 'Jane Smith', date: 'June 28, 2024' },
    { id: 3, title: 'Top Tips for "Minecraft" Beginners', image: 'tutorial3.jpg', content: 'Learn how to survive your first night in "Minecraft", find resources, and start building your first shelter with this beginner\'s guide.', author: 'Alex Johnson', date: 'June 25, 2024' },
  ];

  const openTutorial = (tutorial) => {
    setSelectedTutorial(tutorial);
  };

  const closeTutorial = () => {
    setSelectedTutorial(null);
  };

  const handleLike = (tutorialId) => {
    setTutorialLikes(prevLikes => ({
      ...prevLikes,
      [tutorialId]: (prevLikes[tutorialId] || 0) + 1,
    }));
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      const comment = {
        name: newCommentName.trim() !== '' ? newCommentName : null,
        comment: newComment
      };

      setTutorialComments(prevComments => ({
        ...prevComments,
        [selectedTutorial.id]: [...(prevComments[selectedTutorial.id] || []), comment]
      }));

      setNewComment('');
      setNewCommentName('');
    }
  };

  return (
    <main className="tutorials-page">
      <h1>Tutorials</h1>
      <div className="tutorial-grid">
        {tutorials.map(tutorial => (
          <div className="tutorial-card" key={tutorial.id} onClick={() => openTutorial(tutorial)}>
            <img src={tutorial.image} alt={tutorial.title} />
            <h3>{tutorial.title}</h3>
          </div>
        ))}
      </div>

      {selectedTutorial && ( 
        <div className="tutorial-modal">
          <div className="tutorial-modal-content">
            <button className="close-button" onClick={closeTutorial}>&times;</button>
            <img src={selectedTutorial.image} alt={selectedTutorial.title} className="tutorial-image" />
            <h2>{selectedTutorial.title}</h2>
            <p className="tutorial-details">By {selectedTutorial.author} | {selectedTutorial.date}</p>
            <p className="tutorial-content">{selectedTutorial.content}</p>

            <div className="like-section">
              <button onClick={() => handleLike(selectedTutorial.id)}>Like</button>
              <span>{tutorialLikes[selectedTutorial.id] || 0} Likes</span>
            </div>
            <div className="comments-section">
              <h3>Comments</h3>
              <ul>
                {tutorialComments[selectedTutorial.id].map((comment, index) => (
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

export default Tutorials;
