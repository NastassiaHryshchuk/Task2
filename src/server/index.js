import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import renderer from '../helpers/renderer';
import createStore from '../helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  //
  //

  res.send(renderer(req, store));
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
