import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor() {
    super();
    this.fetchRecipes = this.fetchRecipes.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
  }

  componentDidMount() {
    console.log('>>> Search mounted');
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
    });
  }

  addIngredient(e) {
    e.preventDefault();
    const ingredient = this.refs.ingredient.value;
    console.log('>.>.> addIngredient: ', ingredient);
    this.props.addIngredient(ingredient);
  }

  removeIngredient(i) {
    console.log('>> removing ingr #', i);
    this.props.removeIngredient(i);
  }

  render() {
    return (
      <div className="search-main">
        <h2>
          <p>Add your ingredients:</p>
          <form onSubmit={this.addIngredient}>
            <input ref="ingredient" className="ingredient-input"></input>
            <button>Add Ingredient</button>
          </form>

          <button type="submit" onClick={this.fetchRecipes} className="search-submit">Search Recipes</button>
        </h2>
        <ul>
        {this.props.ingredients.map((item, i) =>
          <li key={i} onClick={this.removeIngredient.bind(this, i)}>{item}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Search;