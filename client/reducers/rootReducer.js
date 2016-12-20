import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import favorite from './favorite';
import favorites from './favorites';
import ingredients from './ingredients';
import recipes from './recipes';

const rootReducer = combineReducers({
  ingredients,
  recipes,
  favorites, 
  routing: routerReducer 
});

export default rootReducer;
