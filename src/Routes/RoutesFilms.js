import EmptyResult from '../components/EmptyResult/EmptyResult';
import NotFound from '../components/NotFound/NotFound';
import Films, { loadData } from '../components/Films/Films';

export default [
  {
    path: '/',
    exact: true,
    component: EmptyResult,
  },
  {
    loadData,
    path: '/film/:id',
    component: Films,
  },
  {
    loadData,
    path: '/movies',
    component: Films,
  },
  {
    path: '*',
    component: NotFound,
  },
];
