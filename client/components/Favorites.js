import React from 'react';
import axios from 'axios';

class Favorites extends React.Component {
  constructor() {
    super();
    this.fetchFavs = this.fetchFavs.bind(this);
    this.addFav = this.addFav.bind(this);
    this.delFav = this.delFav.bind(this);
  }

  componentDidMount() {
    console.log('>>>>>>> Favorites mounted');
    this.fetchFavs();
  }

  fetchFavs() {
    axios.get('/favs')
    .then((result) => {
      console.log(result);
    });
  }

  addFav() {
    const favoriteToAdd = {
      name: 'soup', 
      calories: 850,
    };
    axios.post('/favs', favoriteToAdd)
    .then((result) => {
      console.log(result);
    });    
  }

  delFav() {
    const favId = {
      id: '5851cb42fbc10e504421e491',
    };
    axios.delete('/favs', favId)
    .then((result) => {
      console.log(result);
    });    
  }
  
  render() {
    return (
      <div className="favorites-main">
        <h2>
          <p>Your favorites:</p>
          <input className="filter-favs"></input>
        </h2>
      </div>
    );
  }
}

export default Favorites;