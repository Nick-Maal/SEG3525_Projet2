import React, { useState } from 'react';
import './Tutorials.css';
import cyberpunkImage from './images/cyberpunk.jpeg';
import lolImage from './images/lol.jpeg';
import minecraftImage from './images/minecraft.jpeg';

function Tutorials() {
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [tutorialLikes, setTutorialLikes] = useState({});
  const [tutorialComments, setTutorialComments] = useState({
    1: [
      { name: 'NewbieGamer', comment: 'This guide was super helpful, thank you!', rating: 4 },
      { name: 'ProPlayer', comment: 'Great tips for beginners!', rating: 5 }
    ],
    2: [{ name: 'StrategyMaster', comment: 'I didn\'t know about these strategies!', rating: 3 }],
    3: [{ name: 'Anonymous', comment: 'Helpful tutorial, I improved a lot.', rating: 4 }],
    4: [],
    5: [{ name: 'Techie', comment: 'Thanks for the step-by-step instructions.', rating: 5 }],
  });

  const [newComment, setNewComment] = useState('');
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentRating, setNewCommentRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const tutorials = [
    { 
      id: 1, 
      title: 'Getting Started with "Cyberpunk 2077"', 
      image: cyberpunkImage, 
      content: 'This beginner\'s guide will help you get started with "Cyberpunk 2077". Learn the basics of gameplay, character creation, and essential tips to survive in Night City.', 
      author: 'John Doe', 
      date: 'July 1, 2024' 
    },
    { id: 2, title: 'Mastering "League of Legends"', image: lolImage, content: 'In this guide, we cover the basics of "League of Legends", including roles, champions, and strategies to help you climb the ranks.', author: 'Jane Smith', date: 'June 28, 2024' },
    { id: 3, title: 'Top Tips for "Minecraft" Beginners', image: minecraftImage, content: 'Learn how to survive your first night in "Minecraft", find resources, and start building your first shelter with this beginner\'s guide.', author: 'Alex Johnson', date: 'June 25, 2024' },
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
    if (newComment.trim() === '') {
      setErrorMessage('Please fill in the comment field.');
      return;
    }

    const comment = {
      name: newCommentName.trim() !== '' ? newCommentName : 'Anonymous',
      comment: newComment,
      rating: newCommentRating
    };

    setTutorialComments(prevComments => ({
      ...prevComments,
      [selectedTutorial.id]: [...(prevComments[selectedTutorial.id] || []), comment]
    }));

    setNewComment('');
    setNewCommentName('');
    setNewCommentRating(0);
    setErrorMessage('');
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
                    {comment.rating > 0 && <span> - {comment.rating} Stars</span>}
                  </li>
                ))}
              </ul>

              <div className="comment-form">
                {errorMessage && <p className="error-message">{errorMessage}</p>}
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
                <select 
                  value={newCommentRating}
                  onChange={(e) => setNewCommentRating(parseInt(e.target.value))}
                >
                  <option value={0}>Select Rating (Optional)</option>
                  <option value={1}>1 Star</option>
                  <option value={2}>2 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={5}>5 Stars</option>
                </select>
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
