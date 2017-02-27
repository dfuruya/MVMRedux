import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userName from './reducers/userNameReducer';
import favorites from './reducers/favoritesReducer';

import usernameInput from './reducers/usernameInputReducer';
import passwordInput from './reducers/passwordInputReducer';
import isAuthenticated from './reducers/isAuthenticatedReducer';
import filterStr from './reducers/filterStrReducer';
import ingredient from './reducers/ingredientReducer';
import ingredients from './reducers/ingredientsReducer';
import recipes from './reducers/recipesReducer';

const userReducer = combineReducers({
  userName,
  favorites,
});

const rootReducer = combineReducers({
  user: userReducer,
  usernameInput,
  passwordInput,
  isAuthenticated,
  filterStr,
  ingredient,
  ingredients,
  recipes,
  routing: routerReducer
});

export default rootReducer;
