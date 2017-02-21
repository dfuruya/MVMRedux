import React from 'react';
import { history } from 'store';
import NavBarLayout from './NavBarLayout';

class NavBar extends React.Component {
  handleLogout(e) {
    e.preventDefault();
    this.props.deAuthUser();
    this.props.logOutUser();
    history.push('/login');
  }
  
  render() {
    const { isAuthenticated } = this.props;
    return (
      <NavBarLayout 
        handleLogout={this.handleLogout.bind(this)}
        isAuthenticated={isAuthenticated}
      />
    );
  }
}

export default NavBar;
