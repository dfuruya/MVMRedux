import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor() {
    super();
    this.fetchRecipes = this.fetchRecipes.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
  }

  fetchRecipes(e) {
    e.preventDefault();
    const queryTerms = this.props.ingredients;
    console.log('>>> queryTerms:', queryTerms);
    const query = {
      q: queryTerms
    };
    axios.post('/search', query)
    .then((result) => {
      console.log(result.data.recipes);
      this.props.showRecipes(result.data.recipes);
    });
  }

  addIngredient(e) {
    e.preventDefault();
    const ingredient = this.refs.ingredient.value;
    this.refs.ingredient.value = '';
    this.props.addIngredient(ingredient);
  }

  removeIngredient(index) {
    this.props.removeIngredient(index);
  }

  checkRecipe(index) {
    this.props.checkRecipe(index);
  }

  render() {
    return (
      <div className="search-main">

        <h2>
          <p>Add your ingredients:</p>
          <form onSubmit={this.addIngredient}>
            <input 
              ref="ingredient" 
              className="ingredient-input"
              placeholder="Enter an ingredient">
            </input>
            <button>Add Ingredient</button>
          </form>
          <button type="submit" onClick={this.fetchRecipes} className="search-submit">Search Recipes</button>
        </h2>

        <ul>
        {this.props.ingredients.map((item, i) =>
          <li key={i + item} onClick={this.removeIngredient.bind(this, i)}>{item}</li>
        )}
        </ul>

        <div>
        {this.props.recipes.length === 0 ? null : 'Search results:'}
          <ul>
          {this.props.recipes.map((recipe, i) => 
            <li 
              key={recipe.recipe_id}
              onClick={this.checkRecipe.bind(this, i)}
            >{recipe.title}</li>
          )}
          </ul>
        </div>

      </div>
    );
  }
}

export default Search;
