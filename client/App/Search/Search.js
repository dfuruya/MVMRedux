import React from 'react';
import axios from 'axios';
import SearchLayout from './searchLayout';
import ResultsLayout from './Results/resultsLayout';

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

  inputIngredient(e) {
    e.preventDefault();
    const ingredient = e.target.value;
    this.props.inputIngredient(ingredient);
  }

  addIngredient(e) {
    e.preventDefault();
    const { ingredient } = this.props;
    this.props.addIngredient(ingredient);
    this.props.clearInput();
  }

  removeIngredient(index) {
    this.props.removeIngredient(index);
  }

  clearIngredient(e) {
    e.preventDefault();
    this.props.clearIngredient();
  }

  clearResults() {
    this.props.clearResults();
  }
  
  handleRecipe(event, index) { 
    const recipe = this.props.recipes[index];
    let favIndex = -1,
        favId = -1;
    this.props.favorites.forEach((fav, i) => {
      if (fav.recipe_id === recipe.recipe_id) {
        favIndex = i;
        favId = fav.recipe_id;
      }
    });
    favIndex > -1
      ? this.props.deleteRemoveFavorite(favId, favIndex)
      : this.props.saveAddFavorite(recipe);
  }

  render() {
    const { ingredient, ingredients, recipes } = this.props;
    return (
      <div className="search-main">
        <SearchLayout 
          inputIngredient={this.inputIngredient.bind(this)}
          addIngredient={this.addIngredient.bind(this)}
          fetchRecipes={this.fetchRecipes.bind(this)}
          removeIngredient={this.removeIngredient.bind(this)}
          clearIngredient={this.clearIngredient.bind(this)}
          clearResults={this.clearResults.bind(this)}
          ingredients={ingredients}
          ingredient={ingredient}
        />
        <ResultsLayout 
          handleRecipe={this.handleRecipe.bind(this)}
          recipes={recipes}
        />
      </div>
    );
  }
}

export default Search;
