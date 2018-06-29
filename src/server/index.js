import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import RoutesHeader from '../Routes/RoutesHeader';
import RoutesCockpit from '../Routes/RoutesCockpit';
import RoutesFilms from '../Routes/RoutesFilms';
import renderer from '../helpers/renderer';
import createStore from '../helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  // console.log(matchRoutes(RoutesFilms, req.path));

  const promises = matchRoutes(RoutesFilms, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  // console.log(promises);

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
