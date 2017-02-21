import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { 
  deAuthUser,
  logOutUser,
} from 'actions/actionCreators';

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  deAuthUser(user) {
    dispatch(deAuthUser(user));
  },
  logOutUser(user) {
    dispatch(logOutUser(user));
  },
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(NavBar);
