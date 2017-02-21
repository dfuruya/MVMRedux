import React from 'react';
import NoItemsLayout from 'Global/NoItemsLayout';

const noIngredients = {
  itemName: 'ingredients',
  suggestion: `Go add some!`,
};

const SearchLayout = props => 
  <div className="search-layout">
    <h2>Add your ingredients:</h2>
    <form className="ingredient-input">
      <input 
        type="text"
        value={props.ingredient}
        placeholder="Enter an ingredient"
        onChange={e => props.inputIngredient(e)}>
      </input>
      <button onClick={e => props.addIngredient(e)}>Add Ingredient</button>
      <button onClick={e => props.clearIngredients(e)}>Clear Ingredients</button>
    </form>

    <button onClick={e => props.fetchRecipes(e)}>Search Recipes</button>

    {props.ingredients.length === 0
      ? <NoItemsLayout 
          itemName={noIngredients.itemName}
          suggestion={noIngredients.suggestion} />
      : <ul>
        {props.ingredients.map((item, i) =>
          <li 
            key={i + item} 
            onClick={e => props.removeIngredient(e, i)}>
            <p>{item}</p>
          </li>
        )}
        </ul>
    }
  </div>

export default SearchLayout;