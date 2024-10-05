import React, { useEffect, useState } from 'react';
import PostForm from './components/PostForm';
import MessageForm from './components/MessageForm';

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch('http://localhost:5000/api/posts');
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Social Media Platform</h1>
      <PostForm fetchPosts={fetchPosts} />
      <MessageForm />
      <div>
        {posts.map(post => (
          <div key={post._id}>
            <img src={post.imageUrl} alt={post.description} />
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
