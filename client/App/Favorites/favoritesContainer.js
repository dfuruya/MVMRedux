import React from 'react';
import { connect } from 'react-redux';
import Favorites from './Favorites';
import { 
  filterFavs,
  deleteRemoveFavorite,
} from 'actions/actionCreators';

const mapStateToProps = state => ({
  favorites: state.favorites,
  filterStr: state.filterStr
});

const mapDispatchToProps = dispatch => ({
  filterFavs(filter) {
    dispatch(filterFavs(filter));
  },
  deleteRemoveFavorite(id, index) {
    dispatch(deleteRemoveFavorite(id, index));
  },
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Favorites);
