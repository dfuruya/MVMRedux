import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import appRoutes from './App/appRoutes';

const randomNum = Math.floor(Math.random() + 0.5);

const router = (
  <Provider store={store}>
    {appRoutes}
  </Provider>
);

render(router, document.getElementById('root'));