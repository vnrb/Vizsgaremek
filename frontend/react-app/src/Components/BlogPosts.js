import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogPosts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/blog/')
      .then(response => response.json())
      .then(result => {
        setData(result);
      })
      .catch(error => {
        console.log('Hiba történt az adatok lekérdezése közben:', error);
      });
  }, []);
  return (
    <div className='blog-page'>
      <div className='container'>
        <div className='row'>
          {data.map(item => (
            <div className='blog-post col-lg-4 col-md-4 col-sm-4' key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
              <p>Szerző: {item.author}</p>
              <p>Dátum: {item.dates}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPosts;
