import React from 'react';
import axios from 'axios';

class Favorites extends React.Component {
  constructor() {
    super();
    this.filterFavs = this.filterFavs.bind(this);
    // this.fetchFavs = this.fetchFavs.bind(this);
    // this.addFav = this.addFav.bind(this);
  }

  // componentDidMount() {
  //   console.log('>>>>>>> Favorites mounted');
  //   this.fetchFavs();
  // }

  // fetchFavs() {
  //   axios.get('/favs')
  //   .then((result) => {
  //     console.log(result);
  //   });
  // }

  // addFav() {
  //   const favoriteToAdd = {
  //     name: 'soup', 
  //     calories: 850,
  //   };
  //   axios.post('/favs', favoriteToAdd)
  //   .then((result) => {
  //     console.log(result);
  //   });    
  // }

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
            .filter(e => e.title.toLowerCase().includes(filterStr.toLowerCase()))
            .map((fav, i) => (
            <li key={fav.recipe_id}>
              <div onClick={this.delFav.bind(this, i)}>{fav.title}</div>
              <a href={fav.source_url} target="_blank">
                <img src={fav.image_url} height="50px"/>
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