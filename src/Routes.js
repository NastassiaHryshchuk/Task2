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

// export default () => {
//   return (
//     <div className={classes.sticky_footer}>
//       <Switch>
//         <Route exact path="/" component={Search} />
//         <Route path="/film/:id" component={Detail} />
//         <Route component={Search} />;
//       </Switch>
//       <div className={classes.main}>
//         <Switch>
//           <Route path="/film/:id" render={(props) => <Cockpit {...props} films={this.props.moves} />} />
//           <Route path="/movies" render={(props) => <Cockpit {...props} films={this.props.moves} />} />
//         </Switch>

//         <Switch>
//           <Route exact path="/" component={EmptyResult} />
//           <Route path="/film/:id" render={(props) => <Films {...props} films={this.props.moves} />} />
//           <Route path="/movies" render={(props) => <Films {...props} films={this.props.moves} />} />
//           <Route component={NotFound} />
//         </Switch>
//       </div>
//       <Footer />
//     </div>
//   );
// };


class Routes extends Component {
  render() {
    return (
      <div className={classes.sticky_footer}>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/film/:id" component={Detail} />
          <Route component={Search} />;
        </Switch>
        <div className={classes.main}>
          <Switch>
            <Route path="/film/:id" render={(props) => <Cockpit {...props} films={this.props.moves} />} />
            <Route path="/movies" render={(props) => <Cockpit {...props} films={this.props.moves} />} />
          </Switch>
          <Switch>
            <Route exact path="/" component={EmptyResult} />
            <Route path="/film/:id" render={(props) => <Films {...props} films={this.props.moves} />} />
            <Route path="/movies" render={(props) => <Films {...props} films={this.props.moves} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    moves: state.films,
  };
};

export default connect(mapStateToProps)(Routes);
