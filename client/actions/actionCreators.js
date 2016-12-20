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

export const saveFavorite = favorites => {
  return {
    type: 'SAVE_FAVORITE',
    favorites
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
