import React from 'react';
import { render } from 'react-dom';

// import css from './styles/style.styl';

import Main from './components/Main';
import Search from './components/Search';
import Favorites from './components/Favorites';
import Single from './components/Single';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Search}></IndexRoute>
        <Route path="/favs" component={Favorites}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('app'));