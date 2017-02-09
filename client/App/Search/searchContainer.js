import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import {
  clearInput, 
  inputIngredient, 
  addIngredient, 
  removeIngredient,
  clearIngredients,
  showRecipes,
  saveAddFavorite,
  deleteRemoveFavorite,
} from 'actions/actionCreators';

const mapStateToProps = state => ({
  userName: state.userName,
  ingredient: state.ingredient,
  ingredients: state.ingredients,
  recipes: state.recipes,
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => ({
  inputIngredient(ingredient) {
    dispatch(inputIngredient(ingredient));
  },
  clearInput(ingredient) {
    dispatch(clearInput(ingredient));
  },
  addIngredient(ingredient) {
    dispatch(addIngredient(ingredient));
  },
  removeIngredient(ingredient) {
    dispatch(removeIngredient(ingredient));
  },
  clearIngredients(ingredients) {
    dispatch(clearIngredients(ingredients));
  },
  showRecipes(recipes) {
    dispatch(showRecipes(recipes));
  },
  saveAddFavorite(favorite, username) {
    dispatch(saveAddFavorite(favorite, username));
  },
  deleteRemoveFavorite(id, index, username) {
    dispatch(deleteRemoveFavorite(id, index, username));
  },
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Search);
