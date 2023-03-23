import React, {useEffect, useState} from 'react';
import NewsItem from './NewsItem';
import {useParams} from 'react-router-dom';

const News = () => {
 
  const [articles, setArticles] = useState([]);
  const { sourceId } = useParams();
  
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=48d3a60194c649978e7e75a4e252489b`)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [sourceId]);


  return (
    <div className='container my-3'>
      <h2>Top Headlines from {sourceId}</h2>
      <div className='row'>
      {articles.map(article => (
      <div className='col md-4'>
      <NewsItem 
        newsUrl={article.url}
        title={article.title ? article.title.slice(0,40) : " "}
        description={article.description ? article.description.slice(0,88) : " "}
        url={article.urlToImage}
      />
       </div>
       ))}
      </div>
    </div>
  )
};

export default News;
