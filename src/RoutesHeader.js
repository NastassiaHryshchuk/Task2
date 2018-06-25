import Search from './components/Search/Search';
import Detail, { loadData } from './components/Detail/Detail';

export default [
  {
    path: '/',
    exact: true,
    component: Search,
  },
  {
    loadData,
    path: '/film/:id',
    component: Detail,
  },
  {
    path: '*',
    component: Search,
  },
];
