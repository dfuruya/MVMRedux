import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import routes from './routes';

const router = (
  <Provider store={store}>{routes}</Provider>
);

render(router, document.getElementById('root'));
