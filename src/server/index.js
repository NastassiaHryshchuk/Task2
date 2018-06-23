import 'babel-polyfill';
import express from 'express';
import renderer from '../helpers/renderer';
import createStore from '../helpers/createStore';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { StaticRouter } from 'react-router-dom';
// import Routes from '../Routes';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();

  //
  //
  //

  res.send(renderer(req, store));
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});

