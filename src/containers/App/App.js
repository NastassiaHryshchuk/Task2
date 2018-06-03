import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Films from '../../components/Films/Films';
import Cockpit from '../../components/Cockpit/Cockpit';
import Footer from '../../components/Footer/Footer';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

import classes from './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.sticky_footer}>
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
          <div className={classes.main}>
            <Cockpit films={this.props.moves} />
            <div className={classes.wrap}>
              <Films films={this.props.moves} />
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
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

// <Route exact path="/" render={(props) => <Films {...props} films={this.props.moves} />} />
// <Route component={NotFound} />
