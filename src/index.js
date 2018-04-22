import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
// import styles from './main.css';

const title = 'Работает!!!';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
