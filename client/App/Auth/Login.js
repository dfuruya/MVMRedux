import React from 'react';
import LoginLayout from './LoginLayout';

class SignIn extends React.Component {
  inputUser(user) {
    this.props.inputUser(user);
  }

  inputPwd(input) {
    this.props.inputPwd(input);
  }

  handleLogin(e) {
    e.preventDefault();
    const { usernameInput, passwordInput } = this.props;
    this.props.loginUserAuth({usernameInput, passwordInput});
    this.props.clearPwd();
  }
  
  render() {
    const { usernameInput, passwordInput } = this.props;
    return (
      <LoginLayout 
        inputUser={this.inputUser.bind(this)}
        inputPwd={this.inputPwd.bind(this)}
        handleLogin={this.handleLogin.bind(this)}
        usernameInput={usernameInput}
        passwordInput={passwordInput}
      />
    );
  }
}

export default SignIn;
