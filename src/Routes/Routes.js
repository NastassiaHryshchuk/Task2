import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import RoutesHeader from './RoutesHeader';
import RoutesCockpit from './RoutesCockpit';
import RoutesFilms from './RoutesFilms';

import Search from '../components/Search/Search';
import Detail from '../components/Detail/Detail';
import EmptyResult from '../components/EmptyResult/EmptyResult';
import NotFound from '../components/NotFound/NotFound';
import Films from '../components/Films/Films';
import Cockpit from '../components/Cockpit/Cockpit';
import Footer from '../components/Footer/Footer';

import classes from '../containers/App/App.css';

export default() => {
  return (
    <div className={classes.sticky_footer}>
      {renderRoutes(RoutesHeader)}
      <div className={classes.main}>
        {renderRoutes(RoutesCockpit)}
        <div className={classes.wrap}>
          {renderRoutes(RoutesFilms)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

// export default() => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/hi" component={() => 'Hi'} />
//     </div>
//   );
// };
