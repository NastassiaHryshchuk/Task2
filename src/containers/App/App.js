import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Detail from '../../components/Detail/Detail';
import Films from '../../components/Films/Films';
import Cockpit from '../../components/Cockpit/Cockpit';
import Footer from '../../components/Footer/Footer';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.sticky_footer}>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <Detail value="world" films={this.props.moves} />
        <div className={classes.main}>
          <Cockpit films={this.props.moves} />
          <div className={classes.wrap}>
            <div className={classes.list}>
              <Films films={this.props.moves} />
            </div>
          </div>
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

export default connect(mapStateToProps)(App);
