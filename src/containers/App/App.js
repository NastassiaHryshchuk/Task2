import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Films from '../../components/Films/Films';
import Cockpit from '../../components/Cockpit/Cockpit';
import Footer from '../../components/Footer/Footer';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import NotFound from '../../components/NotFound/NotFound';

import classes from './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={classes.sticky_footer}>
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
          <div className={classes.main}>
            <Cockpit films={this.props.moves} />
            <div className={classes.wrap}>


              <Route
                exact
                path="/"
                render={(props) => <Films {...props} films={this.props.moves} />}
                  />
              <Route path="/not" component={NotFound} />
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    moves: state.films,
  };
};

export default connect(mapStateToProps)(App);


// <Films films={this.props.moves} />
// <Route path="/not" component={NotFound} />
