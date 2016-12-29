import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { history } from '../store';

import appContainer from './appContainer';
import favoritesContainer from './Favorites/favoritesContainer';
import searchContainer from './Search/searchContainer';

const appRoutes = (
  <Router history={history}>
    <Route path="/" component={appContainer}>
      <IndexRoute component={searchContainer}></IndexRoute>
      <Route 
        path="/favs" 
        // when entering/leaving a route:
        // onEnter={(location, replaceWith) => {}}
        // onLeave={() => {}}
        component={favoritesContainer}>
      </Route>
      <Route 
        path="/search" 
        // onEnter={}
        component={searchContainer}>
      </Route>
    </Route>
  </Router>
);

export default appRoutes;