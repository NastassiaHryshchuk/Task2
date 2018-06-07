import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import App from './containers/App/App';
import reducer from './store/reducer';

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

const initialDataLoad = () => {
  return fetch('http://react-cdp-api.herokuapp.com/movies?limit=20')
    .then(response => {
      return response.json();
    })
    .then((data) => {
      store.dispatch({ type: 'dataLoaded', data });
    })
    .catch(error => {
      throw error;
    });
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
  () => initialDataLoad(),
);

module.hot.accept();


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app'),
//   () => initialDataLoad(),
// );

