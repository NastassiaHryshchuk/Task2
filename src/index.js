import React from 'react';
import ReactDOM from 'react-dom';
import style from './_scss/main.scss';

import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

module.hot.accept();
