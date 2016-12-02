import React from 'react';

const Favorites = React.createClass({
  render() {
    console.log('Favorites loaded');
    return (
      <div className="favorites-main">
        <h2>
          <p>Your favorites:</p>
          <input className="filter-favs"></input>
          <input type="submit"></input>
        </h2> 
      </div>
    );
  }
});

export default Favorites;