import React from 'react';
import { connect } from 'react-redux';
import Favorites from './Favorites';
import { 
  filterFavs,
  deleteRemoveFavorite,
} from 'actions/actionCreators';

const mapStateToProps = state => ({
  userName: state.userName,
  favorites: state.favorites,
  filterStr: state.filterStr
});

const mapDispatchToProps = dispatch => ({
  filterFavs(filter) {
    dispatch(filterFavs(filter));
  },
  deleteRemoveFavorite(id, index, username) {
    dispatch(deleteRemoveFavorite(id, index, username));
  },
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Favorites);
