import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { 
  inputUser,
  inputPwd,
  clearPwd,
  loginUserAuth,
} from 'actions/actionCreators';

const mapStateToProps = state => ({
  usernameInput: state.usernameInput,
  passwordInput: state.passwordInput,
});

const mapDispatchToProps = dispatch => ({
  inputUser(input) {
    dispatch(inputUser(input));
  },
  inputPwd(input) {
    dispatch(inputPwd(input));
  },
  clearPwd(input) {
    dispatch(clearPwd(input));
  },
  loginUserAuth(loginData) {
    dispatch(loginUserAuth(loginData));
  },
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Login);
