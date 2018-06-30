import React from 'react';
import { renderRoutes } from 'react-router-config';

import RoutesHeader from './RoutesHeader';
import RoutesCockpit from './RoutesCockpit';
import RoutesFilms from './RoutesFilms';

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
