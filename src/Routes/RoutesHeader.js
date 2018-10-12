import Search from '../components/Search/Search';
import Detail from '../components/Detail/Detail';

export default [
  {
    path: '/',
    exact: true,
    component: Search,
  },
  {
    ...Detail,
    path: '/film/:id',
  },
  {
    path: '*',
    component: Search,
  },
];
