import React from 'react';

const SearchLayout = props => 
  <div>
    <h2>
      <p>Add your ingredients:</p>
      <div>
        <form>
          <input 
            type="text"
            value={props.ingredient}
            className="ingredient-input"
            placeholder="Enter an ingredient"
            onChange={(e) => props.inputIngredient(e)}>
          </input>
          <button type="submit" onClick={(e) => props.addIngredient(e)}>Add Ingredient</button>
          <button type="submit" onClick={(e) => props.clearIngredient(e)}>Clear Ingredients</button>
        </form>
      </div>
      <button type="submit" onClick={(e) => props.fetchRecipes(e)} className="search-submit">Search Recipes</button>
    </h2>

    <ul>
    {props.ingredients.map((item, i) =>
      <li 
        key={i + item} 
        onClick={(e, i) => props.removeIngredient(e, i)}>
        <p>{item}</p>
      </li>
    )}
    </ul>
  </div>

export default SearchLayout;