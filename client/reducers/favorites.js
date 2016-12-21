const favorites = (state = {}, action) => {
  switch(action.type) {
    case 'SAVE_FAVORITE':
      console.log('>.>.> SAVE_FAVORITE: ', state, action);
      const newFavorite = {};
      newFavorite[action.favorites.recipe_id] = action.favorites;
      return Object.assign({}, state, newFavorite);
    case 'REMOVE_FAVORITE':
      console.log('>.>.> REMOVE_FAVORITE: ', state, action);
      const newState = Object.assign({}, state);
      delete newState[action.favorites.recipe_id];
      return newState;
  }
  return state;
};

export default favorites;
