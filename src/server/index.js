import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import App from '../containers/App/App';
import Routes from '../Routes';
import Routes_2 from '../Routes_2';
import Routes_3 from '../Routes_3';
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

  console.log(matchRoutes(Routes, req.path));
  console.log(matchRoutes(Routes_2, req.path));
  const promises = matchRoutes(Routes_3, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  console.log(promises);

  res.send(renderer(req, store));
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});

