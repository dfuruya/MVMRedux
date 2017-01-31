import axios from 'axios';

// Ingredient actions
export const inputIngredient = ingredient => 
  ({type: 'INPUT_INGREDIENT', ingredient});

export const clearInput = ingredient => 
  ({type: 'CLEAR_INPUT', ingredient});

// Ingredients actions
export const addIngredient = ingredients => 
  ({type: 'ADD_INGREDIENT', ingredients});

export const removeIngredient = ingredients => 
  ({type: 'REMOVE_INGREDIENT', ingredients});

export const clearIngredient = ingredients => 
  ({type: 'CLEAR_INGREDIENT', ingredients});

// Recipes actions
export const showRecipes = recipes => 
  ({type: 'SHOW_RECIPES', recipes});

// Favorites actions
export const addFavorite = favorites => 
  ({type: 'ADD_FAVORITE', favorites});

export const removeFavorite = favorites => 
  ({type: 'REMOVE_FAVORITE', favorites});

export const saveFavorite = favs => 
  (axios.post('/api/favs', favs));

export const deleteFavorite = favId => 
  (axios.delete(`/api/favs/${favId}`, {recipe_id: favId}));

// thunks for adding/removing favorites
export const saveAddFavorite = fav => {
  return dispatch => {
    return saveFavorite(fav)
    .then(result => dispatch(addFavorite(fav)));
  };
};

export const deleteRemoveFavorite = (favId, favIndex) => {
  return dispatch => {
    return deleteFavorite(favId)
    .then(result => dispatch(removeFavorite(favIndex)));
  };
};

// Filter Favorites actions
export const filterFavs = filterStr => 
  ({type: 'FILTER_FAVORITES', filterStr});
