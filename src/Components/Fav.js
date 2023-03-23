import React from 'react';
import { useSelector } from 'react-redux';

function Fav() {
  const favoriteSources = useSelector((state) => state.favoriteSources);

  return (
    <div>
      <h1>Favorite News Sources</h1>
      <ul>
        {favoriteSources.map((source) => (
          <li key={source.id}>
            {source.name} - {source.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fav;
