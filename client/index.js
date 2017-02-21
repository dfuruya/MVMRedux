import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import getRoutes from './routes';

const router = (
  <Provider store={store}>
    {getRoutes(store)}
  </Provider>
);

render(router, document.getElementById('root'));
