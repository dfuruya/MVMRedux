import React from 'react';
import { render } from 'react-dom';

import favorites from './containers/favorites';
import main from './containers/main';
import search from './containers/search';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={main}>
        <IndexRoute component={search}></IndexRoute>
        <Route path="/favs" component={favorites}></Route>
        <Route path="/search" component={search}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));