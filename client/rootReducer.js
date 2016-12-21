import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import favorites from './reducers/favorites';
import ingredients from './reducers/ingredients';
import recipes from './reducers/recipes';

const rootReducer = combineReducers({
  ingredients,
  recipes,
  favorites, 
  routing: routerReducer 
});

export default rootReducer;
