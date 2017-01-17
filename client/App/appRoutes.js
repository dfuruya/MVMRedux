import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { history } from '../store';

import appContainer from './appContainer';
import favoritesContainer from './Favorites/favoritesContainer';
import searchContainer from './Search/searchContainer';
import { fetchFavs, storeFavs } from 'api/favoritesApi';

import { loadState, saveState } from 'localStorage';

const fetchedStateFavs = loadState().favorites;

const appRoutes = (
  <Router history={history}>
    <Route 
      path="/" 
      component={appContainer}
      onEnter={() => { storeFavs(fetchedStateFavs)}}>
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
        component={searchContainer}>
      </Route>
    </Route>
  </Router>
);

export default appRoutes;