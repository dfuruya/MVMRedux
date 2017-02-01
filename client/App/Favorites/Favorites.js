import React from 'react';
import FavoritesLayout from './FavoritesLayout';

class Favorites extends React.Component {
  deleteRemoveFavorite(id, index) {
    this.props.deleteRemoveFavorite(id, index);
  }

  filterFavs(filter) {
    this.props.filterFavs(filter);
  }
  
  render() {
    const { filterStr, favorites } = this.props;
    return (
      <div className="favorites-main">
        <FavoritesLayout 
          filterFavs={this.filterFavs.bind(this)}
          deleteRemoveFavorite={this.deleteRemoveFavorite.bind(this)}
          filterStr={filterStr}
          favorites={favorites}
        />
      </div>
    );
  }
}

export default Favorites;