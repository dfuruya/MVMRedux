import React from 'react';
import NoItemsLayout from 'Global/NoItemsLayout';

const noResults = {
  itemName: 'results',
  suggestion: `Add some ingredients and go search for some recipes!`,
};

const ResultsLayout = props => 
  <div className="results-layout">
    {props.recipes.length === 0 
      ? <NoItemsLayout 
        itemName={noResults.itemName}
        suggestion={noResults.suggestion} />
      : <h2>Search results:</h2>}
    <ul>
      {props.recipes.map((recipe, i) => 
      <li 
        key={recipe.recipe_id}
        onClick={e => props.handleRecipe(null, i)}>
        <p>{recipe.label}</p>
      </li>
      )}
    </ul>
  </div>

export default ResultsLayout;
