import React from 'react';

const SignUpLayout = props => 
  <div className="signup-layout">
    <h2>Sign Up:</h2>
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
      <button onClick={e => props.handleSignUp(e)}>Submit</button>
    </form>
  </div>

export default SignUpLayout;
