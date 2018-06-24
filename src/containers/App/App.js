import { renderRoutes } from 'react-router-config';

import React from 'react';
import classes from './App.css';

import Routes from '../../Routes';
import Routes_2 from '../../Routes_2';
import Routes_3 from '../../Routes_3';
import Footer from '../../components/Footer/Footer';

const App = () => {
  return (
    <div>
      <div className={classes.sticky_footer}>
        {renderRoutes(Routes)}
        <div className={classes.main}>
          {renderRoutes(Routes_2)}
          {renderRoutes(Routes_3)}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

// import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';

// import Search from '../../components/Search/Search';
// import Detail from '../../components/Detail/Detail';
// import EmptyResult from '../../components/EmptyResult/EmptyResult';
// import NotFound from '../../components/NotFound/NotFound';
// import Films from '../../components/Films/Films';
// import Cockpit from '../../components/Cockpit/Cockpit';
// import Footer from '../../components/Footer/Footer';
// import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

// import classes from './App.css';

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div className={classes.sticky_footer}>
//           <ErrorBoundary>
//             <Switch>
//               <Route exact path="/" component={Search} />
//               <Route path="/film/:id" component={Detail} />
//               <Route component={Search} />;
//             </Switch>
//           </ErrorBoundary>
//           <div className={classes.main}>
//             <Switch>
//               <Route path="/film/:id" render={(props) => <Cockpit {...props} films={this.props.moves} />} />
//               <Route path="/movies" render={(props) => <Cockpit {...props} films={this.props.moves} />} />
//             </Switch>
//             <div className={classes.wrap}>
//               <Switch>
//                 <Route exact path="/" component={EmptyResult} />
//                 <Route path="/film/:id" render={(props) => <Films {...props} films={this.props.moves} />} />
//                 <Route path="/movies" render={(props) => <Films {...props} films={this.props.moves} />} />
//                 <Route component={NotFound} />
//               </Switch>
//             </div>
//           </div>
//           <Footer />
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     moves: state.films,
//   };
// };

// export default connect(mapStateToProps)(App);

