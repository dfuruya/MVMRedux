import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">MVM Redux</Link>
        </h1>
        <h2>
          <Link to="/search">Search Recipes </Link>
          /
          <Link to="/favs"> Your Favorites</Link>
        </h2>
        <div>
          { React.cloneElement(this.props.children, this.props) }
        </div>
      </div>
    );
  }
}

export default Main;