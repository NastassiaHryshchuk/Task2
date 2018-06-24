import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Search from './components/Search/Search';
import Detail from './components/Detail/Detail';
import EmptyResult from './components/EmptyResult/EmptyResult';
import NotFound from './components/NotFound/NotFound';
import Films from './components/Films/Films';
import Cockpit from './components/Cockpit/Cockpit';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import classes from './containers/App/App.css';

// class Yyy extends Component {
//   render() {
//     return (
//       <div className={classes.sticky_footer}>
//         <h1>Hello World!!!</h1>
//         <div className={classes.main}>
//           <Switch>
//             <Route path="/film/:id" component={Cockpit} />
//             <Route path="/movies" component={Cockpit} />
//           </Switch>
//           <Switch>
//             <Route exact path="/" component={EmptyResult} />
//             <Route path="/film/:id" component={Films} />
//             <Route path="/movies" component={Films} />
//             <Route component={NotFound} />
//           </Switch>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     moves: state.films,
//   };
// };

// export default connect(mapStateToProps)(Yyy);

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
