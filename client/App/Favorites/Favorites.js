import React from 'react';

class Favorites extends React.Component {
  constructor() {
    super();
    this.filterFavs = this.filterFavs.bind(this);
    this.delFav = this.delFav.bind(this);
  }

  delFav(id, index) {
    this.props.deleteRemoveFavorite(id, index);
  }

  filterFavs(filter) {
    this.props.filterFavs(filter);
  }
  
  render() {
    const { filterStr, favorites } = this.props;
    return (
      <div className="favorites-main">
        <h2>
          <p>Your favorites:</p>
          <input 
            type="text"
            className="filter-favs" 
            placeholder="Search Favorites"
            onChange={ e => this.filterFavs(e.target.value) }>
          </input>
          <ul>
          {favorites
            .filter(e => e.label.toLowerCase().includes(filterStr.toLowerCase()))
            .map((fav, i) => (
            <li key={fav.recipe_id}>
              <div onClick={ () => this.delFav(fav.recipe_id, i) }>{fav.label}</div>
              <a href={fav.url} target="_blank">
                <img src={fav.image} height="100px"/>
              </a>
            </li>
          ))}
          </ul>
        </h2>
      </div>
    );
  }
}

export default Favorites;