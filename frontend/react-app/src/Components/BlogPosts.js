import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogPosts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/blog/:id');
      setData(response.data);
    } catch (error) {
      console.error('Error: ' + error);
    }
  };

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPosts;
