import React from 'react';

const ResultsLayout = props => 
  <div className="results-layout">
    {props.recipes.length === 0 
      ? null 
      : <h2>Search results:</h2>}
    <ul>
    {props.recipes.map((recipe, i) => 
      <li 
        key={recipe.recipe_id}
        onClick={(e) => props.handleRecipe(null, i)}>
        <p>{recipe.label}</p>
      </li>
    )}
    </ul>
  </div>

export default ResultsLayout;
