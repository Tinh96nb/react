import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { allState } from './reducers';
import { createStore } from 'redux';

import {UserContainer} from './containers/user-container';

const store = createStore(allState);

ReactDOM.render(
  <Provider store={store}>
    <UserContainer />
  </Provider>,
  document.getElementById('root')
);
