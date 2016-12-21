import React from 'react';
import { connect } from 'react-redux';
import Favorites from '../components/Favorites';
import { loadFavorites } from '../actions/actionCreators';

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => ({
  // addFavorite: favorite => {
  //   dispatch(addFavorite(favorite));
  // },
  // removeFavorite: favorite => {
  //   dispatch(removeFavorite(favorite));
  // },
  loadFavorites: favorites => {
    dispatch(loadFavorites(favorites));
  },
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Favorites);
