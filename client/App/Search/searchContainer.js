import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import {
  addIngredient, 
  removeIngredient,
  clearIngredient,
  showRecipes,
  saveFavorite,
  removeFavorite
} from 'actions/actionCreators';

const mapStateToProps = state => ({
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
  showRecipes(recipes) {
    dispatch(showRecipes(recipes));
  },
  saveFavorite(favorite) {
    dispatch(saveFavorite(favorite));
  },
  removeFavorite(favorite) {
    dispatch(removeFavorite(favorite));
  },
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Search);
