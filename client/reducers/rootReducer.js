import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import favorite from './favorite';
import favorites from './favorites';
import ingredients from './ingredients';

const rootReducer = combineReducers({
  ingredients,
  favorite,
  favorites, 
  routing: routerReducer 
});

export default rootReducer;
