  export const addFavoriteSource = source => ({
    type: 'ADD_FAVORITE_SOURCE',
    payload: source,
  });
  
  export const removeFavoriteSource = source => ({
    type: 'REMOVE_FAVORITE_SOURCE',
    payload: source,
  });
  