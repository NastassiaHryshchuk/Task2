import EmptyResult from '../components/EmptyResult/EmptyResult';
import NotFound from '../components/NotFound/NotFound';
import Films from '../components/Films/Films';

export default [
  {
    path: '/',
    exact: true,
    component: EmptyResult,
  },
  {
    path: '/film/:id',
    component: Films,
  },
  {
    path: '/movies',
    component: Films,
  },
  {
    path: '*',
    component: NotFound,
  },
];
