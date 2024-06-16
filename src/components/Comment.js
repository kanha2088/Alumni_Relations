import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');
  const postId = '60d21b9667d0d8992e610c85'; // Replace with an actual post ID

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`http://localhost:3600/api/posts/${postId}`);
      setPost(response.data);
    };

    fetchPost();
  }, [postId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3600/api/comments', {
      content: comment,
      author: 'Anonymous', // Replace with actual author name
      postId: postId,
    });
    setPost(response.data);
    setComment('');
  };

  return (
    <div className="App">
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <h2>Comments</h2>
          <ul>
            {post.comments.map((comment) => (
              <li key={comment._id}>
                <p>{comment.content}</p>
                <small>By {comment.author}</small>
              </li>
            ))}
          </ul>
          <form onSubmit={handleCommentSubmit}>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default App;
