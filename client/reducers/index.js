import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import favorites from './favorites';

const rootReducer = combineReducers({
  favorites, 
  routing: routerReducer 
});

export default rootReducer;