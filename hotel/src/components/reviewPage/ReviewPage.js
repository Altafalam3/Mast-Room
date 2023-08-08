import React, { useState } from 'react';
import './ReviewPage.css';

const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform submission logic (e.g., send the rating and comment to the server)
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    // Reset the form
    setRating(0);
    setComment('');
  };

  return (
    <div className="review-page">
      <div className="review-container">
        <h2>Leave a Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="rating-section">
            <label htmlFor="rating">Rating:</label>
            <select id="rating" value={rating} onChange={handleRatingChange}>
              <option value="0">Select Rating</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
          <div className="comment-section">
            <label htmlFor="comment">Comment:</label>
            <textarea id="comment" value={comment} onChange={handleCommentChange} rows="4" cols="50" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
