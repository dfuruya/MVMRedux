import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';
import { history } from 'store';

import HomeContainer from './App/HomeContainer';
import FavoritesContainer from './App/Favorites/FavoritesContainer';
import SearchContainer from './App/Search/SearchContainer';
import LoginContainer from './App/Auth/LoginContainer';
import SignUpContainer from './App/Auth/SignUpContainer';

const getRoutes = store => {
  const requireAuth = (nextState, replaceState) => {
    const state = store.getState();
    if (!state.isAuthenticated) {
      history.push('/login');
    }
  };

  const routes = (
    <Router history={history}>
      <Route path="/" component={HomeContainer}>
        <IndexRoute 
          component={SearchContainer} 
          onEnter={requireAuth} 
        />
        <Route path="login" component={LoginContainer} />
        <Route path="signup" component={SignUpContainer} />
        <Route path="signout" 
          component={SignUpContainer} 
          // onEnter={}
        />
        <Route path="search" 
          component={SearchContainer} 
          onEnter={requireAuth} 
        />
        <Route path="favs"
          component={FavoritesContainer}
          onEnter={requireAuth} 
          // onLeave={() => {}}
        />
      </Route>
    </Router>
  );

  return routes;
}

export default getRoutes;