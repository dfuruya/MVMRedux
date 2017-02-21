import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import rootReducer from './rootReducer';
import { loadState, saveState } from './localStorage';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [ thunk ];
const persistedState = loadState();
// const persistedState = {
//   userName: '',
//   favorites: [],
//   filterStr: '',
//   ingredient: '',
//   ingredients: [],
//   recipes: [],
// };

const store = createStore(
  rootReducer, 
  persistedState, 
  devtools(
    applyMiddleware(...middleware)
  )
);

export const history = syncHistoryWithStore(browserHistory, store);

const throttleDelay = 2000;
// Updating window.localStorage
store.subscribe(throttle(() => {
  saveState(store.getState());
}, throttleDelay));

export default store;
