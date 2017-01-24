import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import {
  addIngredient, 
  removeIngredient,
  clearIngredient,
  showRecipes,
  saveAddFavorite,
  deleteRemoveFavorite,
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
