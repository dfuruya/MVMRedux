import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">MVM Redux</Link>
        </h1>
        <h2>
          <Link to="/">Add Ingredients</Link>
          /
          <Link to="/favs">Your Favorites</Link>
        </h2>
        <div>
          { React.cloneElement(this.props.children, this.props) }
        </div>
      </div>
    );
  }
});

export default Main;