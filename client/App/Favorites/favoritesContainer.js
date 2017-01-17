import React from 'react';
import { connect } from 'react-redux';
import Favorites from './Favorites';
import { 
  removeFavorite,
  loadFavorites, 
  filterFavs,
} from 'actions/actionCreators';

const mapStateToProps = state => ({
  favorites: state.favorites,
  filterStr: state.filterStr
});

const mapDispatchToProps = dispatch => ({
  removeFavorite: favorite => {
    dispatch(removeFavorite(favorite));
  },
  loadFavorites: favorites => {
    dispatch(loadFavorites(favorites));
  },
  filterFavs: filter => {
    dispatch(filterFavs(filter));
  },
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Favorites);
