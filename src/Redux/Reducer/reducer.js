const initialState = {
    sources: [],
    favoriteSources: [],
  };
  
  const FavReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FAVORITE_SOURCE':
        return {
          ...state,
          favoriteSources: [...state.favoriteSources, action.payload],
        };
      case 'REMOVE_FAVORITE_SOURCE':
        return {
          ...state,
          favoriteSources: state.favoriteSources.filter(
            source => source.id !== action.payload.id
          ),
        };
      default:
        return state;
    }
  };
  
  export default FavReducer;
  