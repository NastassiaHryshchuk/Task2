import EmptyResult from '../components/EmptyResult/EmptyResult';
import NotFound from '../components/NotFound/NotFound';
import Films from '../components/Films/Films';

export default [
  {
    ...EmptyResult,
    path: '/',
    exact: true,
  },
  {
    ...Films,
    path: '/film/:id',
  },
  {
    ...Films,
    path: '/movies',
  },
  {
    ...NotFound,
    path: '*',
  },
];
