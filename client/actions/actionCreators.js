import axios from 'axios';

// USER actions
export const logInUser = user => 
  ({type: 'LOGIN_USER', user});

export const logOutUser = user => 
  ({type: 'LOGOUT_USER', user});

// INPUT actions
export const inputIngredient = ingredient => 
  ({type: 'INPUT_INGREDIENT', ingredient});

export const clearInput = ingredient => 
  ({type: 'CLEAR_INPUT', ingredient});

// INGREDIENTS actions
export const addIngredient = ingredients => 
  ({type: 'ADD_INGREDIENT', ingredients});

export const removeIngredient = ingredients => 
  ({type: 'REMOVE_INGREDIENT', ingredients});

export const clearIngredients = ingredients => 
  ({type: 'CLEAR_INGREDIENTS', ingredients});

// RECIPES actions
export const showRecipes = recipes => 
  ({type: 'SHOW_RECIPES', recipes});

// FAVORITES actions
export const addFavorite = favorites => 
  ({type: 'ADD_FAVORITE', favorites});

export const removeFavorite = favorites => 
  ({type: 'REMOVE_FAVORITE', favorites});

export const saveFavorite = (favorites, userName) => 
  (axios.post('/api/favs', { userName, favorites }));

export const deleteFavorite = (recipe_id, user) => 
  (axios.delete(`/api/favs/${user}/${recipe_id}`));

// FILTER FAVORITES actions
export const filterFavs = filterStr => 
  ({type: 'FILTER_FAVORITES', filterStr});


// THUNKS for adding/removing favorites
export const saveAddFavorite = (fav, user) => {
  return dispatch => {
    return saveFavorite(fav, user)
    .then(result => dispatch(addFavorite(fav)));
  };
};

export const deleteRemoveFavorite = (favId, favIndex, user) => {
  return dispatch => {
    return deleteFavorite(favId, user)
    .then(result => dispatch(removeFavorite(favIndex)));
  };
};
