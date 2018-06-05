import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Search from '../../components/Search/Search';
import Detail from '../../components/Detail/Detail';
import NotFound from '../../components/NotFound/NotFound';
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
            <Switch>
              <Route exact path="/" component={Search} />;
              <Route path="/film/:id" component={Detail} />;
              <Route component={Search} />;
            </Switch>
          </ErrorBoundary>
          <div className={classes.main}>
            <Cockpit films={this.props.moves} />
            <div className={classes.wrap}>
              <Switch>
                <Route exact path="/" render={(props) => <Films {...props} films={this.props.moves} />} />
                <Route path="/film/:id" render={(props) => <Films {...props} films={this.props.moves} />} />
                <Route path="/movies" render={(props) => <Films {...props} films={this.props.moves} />} />
              </Switch>
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


// <Route component={NotFound} />
