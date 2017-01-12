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
export const saveFavorite = favorites => 
  ({type: 'SAVE_FAVORITE', favorites});

export const removeFavorite = favorites => 
  ({type: 'REMOVE_FAVORITE', favorites});

export const loadFavorites = favorites => 
  ({type: 'LOAD_FAVORITES', favorites});

// Filter Favorites actions
export const filterFavs = filterStr => 
  ({type: 'FILTER_FAVORITES', filterStr});
