import { createStore, compose } from 'redux';
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

// Updating window.localStorage
store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

export default store;
