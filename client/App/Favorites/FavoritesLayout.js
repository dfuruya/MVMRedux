import React from 'react';
import NoItemsLayout from 'Global/NoItemsLayout';

const noFavorites = {
  itemName: 'favorites',
  suggestion: `Go search for some recipes!`,
};

const FavoritesLayout = props => 
  <div className="favorites-layout">
    <h2>Your favorites:</h2>
    <input 
      type="text"
      className="filter-favs" 
      placeholder="Search Your Favorites"
      onChange={e => props.filterFavs(e.target.value)}>
    </input>
    {props.favorites.length === 0 
      ? <NoItemsLayout 
        itemName={noFavorites.itemName} 
        suggestion={noFavorites.suggestion}/>
      : null}
    <ul>
      {props.favorites
        .filter(e => e.label.toLowerCase().includes(props.filterStr.toLowerCase()))
        .map((fav, i) => 
          <li key={fav.recipe_id}>
            <a href={fav.url} target="_blank">
              <img src={fav.image} height="100px"/>
            </a>
            <div onClick={() => props.deleteRemoveFavorite(fav.recipe_id, i)}>{fav.label}</div>
          </li>
      )}
    </ul>
  </div>

export default FavoritesLayout;