import React from 'react';
// import { Link } from 'react-router';
import NavBarContainer from './NavBar/NavBarContainer';

class Home extends React.Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <div>
        <NavBarContainer /> 
        <div>
          { React.cloneElement(this.props.children, this.props) }
        </div>
      </div>
    );
  }
}

export default Home;