import { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './Posts';
// import Sidebar from './Sidebar';


const DataFetcher = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/post/data')
      .then((response) => {
        console.log('API Response:', response.data);
        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          console.error('Unexpected API response structure:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setError('Failed to fetch posts');
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };
  const handlePostCreated = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {/* <Sidebar open={true} onClose={() => {}} onPostCreated={handlePostCreated} /> */}
      <Posts posts={posts} onDelete={handleDeletePost} />
    </div>
  );
};

export default DataFetcher;
