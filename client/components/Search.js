import React from 'react';

const Search = React.createClass({
  render() {
    console.log('Search loaded');
    return (
      <div className="search-main">
        <h2>
          <p>Add your ingredients:</p>
          <input className="add-input"></input>
          <input type="submit" value="Add"></input>
        </h2> 
      </div>
    );
  }
});

export default Search;