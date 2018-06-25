import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './containers/App/App';
import reducer from './store/reducer';

const store = createStore(
  reducer,
  window.INITIAL_STATE,
  applyMiddleware(thunk),
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
