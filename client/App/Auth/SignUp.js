import React from 'react';
import SignUpLayout from './SignUpLayout';

class Auth extends React.Component {
  inputUser(user) {
    this.props.inputUser(user);
  }

  inputPwd(input) {
    this.props.inputPwd(input);
  }

  handleSignUp(e) {
    e.preventDefault();
    const { usernameInput, passwordInput } = this.props;
    this.props.signupUserAuth({usernameInput, passwordInput});
    this.props.clearPwd();
  }
  
  render() {
    const { usernameInput, passwordInput } = this.props;
    return (
      <SignUpLayout 
        inputUser={this.inputUser.bind(this)}
        inputPwd={this.inputPwd.bind(this)}
        handleSignUp={this.handleSignUp.bind(this)}
        usernameInput={usernameInput}
        passwordInput={passwordInput}
      />
    );
  }
}

export default Auth;
