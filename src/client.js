import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('app'),
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { applyMiddleware, createStore } from 'redux';
// import { Provider } from 'react-redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

// import App from './containers/App/App';
// import reducer from './store/reducer';

// const store = createStore(
//   reducer,
//   applyMiddleware(logger, thunk),
// );

// ReactDOM.hydrate(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app'),
// );

// module.hot.accept();
