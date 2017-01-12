import React from 'react';
import axios from 'axios';

class Favorites extends React.Component {
  constructor() {
    super();
    this.filterFavs = this.filterFavs.bind(this);
    this.fetchFavs = this.fetchFavs.bind(this);
  }

  // componentDidMount() {
  //   console.log('>>>>>>> Favorites mounted');
  //   this.fetchFavs();
  // }

  fetchFavs() {
    axios.get('/api/favs')
    .then((result) => {
      console.log(result);
    });
  }

  delFav(index) {
    this.props.delFav(index);
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
              <div onClick={this.delFav.bind(this, i)}>{fav.label}</div>
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