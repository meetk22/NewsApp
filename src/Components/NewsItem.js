import React from 'react';

const NewsItem = (props) => {
 
  return (
    <div className='my-3'>
      <div className="card" style={{width: "18rem"}}>
        <img src={props.url} alt="News"></img>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.newsUrl} className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
    </div>
  )
};

export default NewsItem;
