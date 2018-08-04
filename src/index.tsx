import * as React from 'react';
import { render } from 'react-dom';
import Hello from './containers/hello';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import userReducer from './store/reducers/user';

const store = createStore(
  combineReducers({
    user: userReducer
  })
);

render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('view')
);
