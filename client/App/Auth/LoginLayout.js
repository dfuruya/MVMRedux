import React from 'react';

const LoginLayout = props => 
  <div className="login-layout">
    <h2>Login:</h2>
    <form className="auth-form">
      <input 
        type="text"
        value={props.usernameInput}
        className="auth-username-input" 
        placeholder="Username"
        onChange={e => props.inputUser(e.target.value)}>
      </input>
      <input 
        type="password"
        value={props.passwordInput}
        className="auth-password-input" 
        placeholder="Password"
        onChange={e => props.inputPwd(e.target.value)}>
      </input>
      <button onClick={e => props.handleLogin(e)}>Submit</button>
    </form>
  </div>

export default LoginLayout;
