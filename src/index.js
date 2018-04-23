import React from 'react';
import ReactDOM from 'react-dom';
import style from './_scss/main.scss';

const title = 'Webpack work!!!';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
