import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import favorites from './reducers/favoritesReducer';
import filterStr from './reducers/filterStrReducer';
import ingredients from './reducers/ingredientsReducer';
import recipes from './reducers/recipesReducer';

const rootReducer = combineReducers({
  favorites, 
  filterStr,
  ingredients,
  recipes,
  routing: routerReducer
});

export default rootReducer;
