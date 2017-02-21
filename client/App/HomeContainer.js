import React from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import { 
  inputUser,
  inputPwd,
  clearPwd,
} from 'actions/actionCreators';

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home);
