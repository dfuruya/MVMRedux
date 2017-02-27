import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { 
  deAuthUser,
  logOutUser,
  logOutFavorites,
} from 'actions/actionCreators';

const mapStateToProps = state => ({
  // userName: state.user.userName,
  isAuthenticated: state.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  deAuthUser() {
    dispatch(deAuthUser());
  },
  logOutUser() {
    dispatch(logOutUser());
  },
  logOutFavorites() {
    dispatch(logOutFavorites());
  },
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(NavBar);
