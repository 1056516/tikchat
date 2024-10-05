import React, { useState } from 'react';
import axios from 'axios';

const PostForm = ({ fetchPosts }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const userId = '1'; // For simplification, assuming a static userId

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/posts', { userId, imageUrl, description });
    fetchPosts();
    setImageUrl('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
