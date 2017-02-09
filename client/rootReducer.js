import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userName from './reducers/userNameReducer';
import favorites from './reducers/favoritesReducer';
import filterStr from './reducers/filterStrReducer';
import ingredient from './reducers/ingredientReducer';
import ingredients from './reducers/ingredientsReducer';
import recipes from './reducers/recipesReducer';

const rootReducer = combineReducers({
  userName,
  favorites, 
  filterStr,
  ingredient,
  ingredients,
  recipes,
  routing: routerReducer
});

export default rootReducer;
