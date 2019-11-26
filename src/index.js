import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import configureStore from './store';

const store = configureStore();
export default store;

import App from './Containers/App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
