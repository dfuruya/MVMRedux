import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import {
  addIngredient, 
  removeIngredient,
  showRecipes,
  addRecipe,
  checkRecipe
} from '../actions/actionCreators';

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  recipes: state.recipes,
});

const mapDispatchToProps = dispatch => ({
  addIngredient: ingredient => {
    dispatch(addIngredient(ingredient));
  },
  removeIngredient: ingredient => {
    dispatch(removeIngredient(ingredient));
  },
  showRecipes: recipes => {
    dispatch(showRecipes(recipes));
  },
  addRecipe: recipe => {
    dispatch(addRecipe(recipe));
  },
  checkRecipe: recipe => {
    dispatch(checkRecipe(recipe));
  },
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Search);
