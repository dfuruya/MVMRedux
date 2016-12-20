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
