export const addIngredient = ingredients => 
  ({type: 'ADD_INGREDIENT', ingredients});

export const removeIngredient = ingredients => 
  ({type: 'REMOVE_INGREDIENT', ingredients});

export const showRecipes = recipes => 
  ({type: 'SHOW_RECIPES', recipes});

export const saveFavorite = favorites => 
  ({type: 'SAVE_FAVORITE', favorites});

export const removeFavorite = favorites => 
  ({type: 'REMOVE_FAVORITE', favorites});

export const loadFavorites = favorites => 
  ({type: 'LOAD_FAVORITES', favorites});

export const filterFavs = filterStr => 
  ({type: 'FILTER_FAVORITES', filterStr});
