import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  fetchRecipes(e) {
    e.preventDefault();
    const queryTerms = this.props.ingredients;
    console.log('>>> queryTerms:', queryTerms);
    const query = {
      q: queryTerms
    };
    axios.post('/api/search', query)
    .then(result => {
      let recipes = [];
      console.log('>>>>> fetch results:', result.data);
      result.data.forEach(recipe => {
        console.log(recipe.recipe);
        const recipeBody = recipe.recipe;
        const recipe_id = recipeBody.uri.slice(-32);
        const fetchedRecipe = Object.assign({}, { recipe_id }, recipeBody);
        recipes.push(fetchedRecipe);
      });
      this.props.showRecipes(recipes);
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

  clearIngredient() {
    this.props.clearIngredient();
  }

  handleRecipe(index) {
    const recipe = this.props.recipes[index];
    let favIndex = -1;
    this.props.favorites.forEach((fav, i) => {
      if (fav.recipe_id === recipe.recipe_id) {
        favIndex = i;
      }
    });
    favIndex > -1
      ? this.props.removeFavorite(favIndex)
      : this.props.saveFavorite(recipe);
  }

  render() {
    const { ingredients, recipes } = this.props;
    return (
      <div className="search-main">

        <h2>
          <p>Add your ingredients:</p>
          <div>
            <form onSubmit={this.addIngredient.bind(this)}>
              <input 
                ref="ingredient" 
                className="ingredient-input"
                placeholder="Enter an ingredient">
              </input>
              <button>Add Ingredient</button>
            </form>
            <button type="submit" onClick={this.clearIngredient.bind(this)}>Clear Ingredients</button>
          </div>
          <button type="submit" onClick={this.fetchRecipes.bind(this)} className="search-submit">Search Recipes</button>
        </h2>

        <ul>
        {ingredients.map((item, i) =>
          <li 
            key={i + item} 
            onClick={this.removeIngredient.bind(this, i)}>
            <p>{item}</p>
          </li>
        )}
        </ul>

        <div>
        {recipes.length === 0 ? null : (<h2>Search results:</h2>)}
          <ul>
          {recipes.map((recipe, i) => 
            <li 
              key={recipe.recipe_id}
              onClick={this.handleRecipe.bind(this, i)}>
              <p>{recipe.label}</p>
            </li>
          )}
          </ul>
        </div>

      </div>
    );
  }
}

export default Search;