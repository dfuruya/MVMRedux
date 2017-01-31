import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import {
  addIngredient, 
  inputIngredient, 
  clearInput, 
  removeIngredient,
  clearIngredient,
  showRecipes,
  saveAddFavorite,
  deleteRemoveFavorite,
  removeFavorite,
} from 'actions/actionCreators';

const mapStateToProps = state => ({
  ingredient: state.ingredient,
  ingredients: state.ingredients,
  recipes: state.recipes,
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => ({
  addIngredient(ingredient) {
    dispatch(addIngredient(ingredient));
  },
  removeIngredient(ingredient) {
    dispatch(removeIngredient(ingredient));
  },
  clearIngredient(ingredient) {
    dispatch(clearIngredient(ingredient));
  },
  inputIngredient(ingredient) {
    dispatch(inputIngredient(ingredient));
  },
  clearInput(ingredient) {
    dispatch(clearInput(ingredient));
  },
  showRecipes(recipes) {
    dispatch(showRecipes(recipes));
  },
  saveAddFavorite(favorite) {
    dispatch(saveAddFavorite(favorite));
  },
  deleteRemoveFavorite(id, index) {
    dispatch(deleteRemoveFavorite(id, index));
  },
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Search);
