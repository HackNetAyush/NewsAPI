import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual NewsAPI key
    const category = 'technology';
    const url = `https://newsapi.ayush1221.repl.co/${category}`;

    axios
      .get(url)
      .then((response) => {
        setNewsData(response.data.articles);
        console.log(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <div>
      <h1>Top Headlines</h1>
      <div className="news-container">
        {newsData.map((article, index) => (
          <div key={index} className="card">
            <LazyLoadImage
              effect="blur"
              src={article.urlToImage}
              alt={article.title}
              className="news-image"
            />
            <div className="card-content">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;
