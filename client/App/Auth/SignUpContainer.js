import React from 'react';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import { 
  inputUser,
  inputPwd,
  clearPwd,
  signupUserAuth,
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
  signupUserAuth(loginData) {
    dispatch(signupUserAuth(loginData));
  },
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SignUp);
