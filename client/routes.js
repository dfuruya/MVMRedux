import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import { history } from 'store';

import Home from './App/Home';
import favoritesContainer from './App/Favorites/favoritesContainer';
import searchContainer from './App/Search/searchContainer';

const routes = (
  <Router history={history}>
    <Route path="/" component={Home}>
      <IndexRedirect to="/search" />
      <Route path="search" component={searchContainer} />
      <Route path="favs"
        component={favoritesContainer}
        // when entering/leaving a route:
        // onEnter={(location, replaceWith) => {}}
        // onLeave={() => {}}
      />
    </Route>
  </Router>
);

export default routes;