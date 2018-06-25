import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import App from '../containers/App/App';
import RoutesHeader from '../RoutesHeader';
import RoutesCockpit from '../RoutesCockpit';
import RoutesFilms from '../RoutesFilms';
import renderer from '../helpers/renderer';
import createStore from '../helpers/createStore';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();

  const promises = matchRoutes(RoutesHeader, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  console.log(promises);

  res.send(renderer(req, store));
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});

