export const addIngredient = ingredients => {
  return {
    type: 'ADD_INGREDIENT',
    ingredients
  }
}

export const removeIngredient = ingredients => {
  return {
    type: 'REMOVE_INGREDIENT',
    ingredients
  }
}

export const showRecipes = recipes => {
  return {
    type: 'SHOW_RECIPES',
    recipes
  }
}

export const checkRecipe = recipes => {
  return {
    type: 'CHECK_RECIPE',
    recipes
  }
}

export const saveRecipe = recipes => {
  return {
    type: 'SAVE_RECIPE',
    recipes
  }
}

export const addFavorite = favorite => {
  return {
    type: 'ADD_FAVORITE',
    favorite
  }
}

export const removeFavorite = favorite => {
  return {
    type: 'REMOVE_FAVORITE',
    favorite
  }
}

export const loadFavorites = favorites => {
  return {
    type: 'LOAD_FAVORITES',
    favorites
  }
}
