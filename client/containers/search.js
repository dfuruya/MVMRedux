import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { addIngredient, removeIngredient } from '../actions/actionCreators';

const mapStateToProps = state => ({
  ingredients: state.ingredients,
});

const mapDispatchToProps = dispatch => ({
  addIngredient: ingredient => {
    dispatch(addIngredient(ingredient));
  },
  removeIngredient: ingredient => {
    dispatch(removeIngredient(ingredient));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Search);
