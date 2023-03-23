import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteSource, removeFavoriteSource} from '../Redux/Action/action';

const NewsSources = () => {

    const [sources, setSources] = useState([]);
    const dispatch = useDispatch();
    const favoriteSources = useSelector(state => state.favoriteSources);
  
    const handleFavoriteClick = source => {
      const isFavorite = favoriteSources.some(
        favoriteSource => favoriteSource.id === source.id
      );
      if (isFavorite) {
        dispatch(removeFavoriteSource(source));
      } else {
        dispatch(addFavoriteSource(source));
      }
    };

    useEffect(() => {
        fetch(`https://newsapi.org/v2/sources?apiKey=48d3a60194c649978e7e75a4e252489b`)
          .then(response => response.json())
          .then(data => setSources(data.sources));
      }, []);

  return (
    <div>
      <h2>News Sources</h2>
      <ul class="font-italic text-decoration-none">
        {sources.map(source => (
          <li className="list-group-item" key={source.id}>
            <Link to={`/news/${source.id}`} style={{paddingLeft:6,paddingRight:8,paddingTop:6, textDecoration: 'none', color:'black' , fontWeight:'bold', fontStyle:'italic'}}>{source.name}</Link>
            <button type="button" class="btn btn-info" onClick={() => handleFavoriteClick} style={{backgroundColor: 'white', color: 'black', borderColor: 'black',fontSize:'10px'}}>Favorite</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsSources;
