import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import throttle from 'lodash/throttle';

import rootReducer from './rootReducer';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(
  rootReducer, 
  persistedState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const history = syncHistoryWithStore(browserHistory, store);

const throttleDelay = 2000;
// Updating window.localStorage
store.subscribe(throttle(() => {
  saveState(store.getState());
}, throttleDelay));

export default store;
