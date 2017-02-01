import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>
          <Link to="/search">Search Recipes</Link>
          {` - `}
          <Link to="/favs">Your Favorites</Link>
        </h2>
        <div>
          { React.cloneElement(this.props.children, this.props) }
        </div>
      </div>
    );
  }
}

export default Home;