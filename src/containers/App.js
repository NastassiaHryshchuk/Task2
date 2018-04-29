import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Films from '../components/Films/Films';
import Cockpit from '../components/Cockpit/Cockpit';
import Footer from '../components/Footer/Footer';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

import classes from './App.css';

class App extends Component {
  state = {
    films: [
      {
        id: 'zxc1',
        title: 'Kill Bill: Vol. 1',
        releasedate: '2003',
        genre: 'Quentin Tarantino 1',
      },
      {
        id: 'zxc2',
        title: 'Kill Bill: Vol. 2',
        releasedate: '2004',
        genre: 'Quentin Tarantino 2',
      },
      {
        id: 'zxc3',
        title: 'Pulp Fiction',
        releasedate: '1994',
        genre: 'Quentin Tarantino 3',
      },
      {
        id: 'zxc4',
        title: 'Jackie Brown',
        releasedate: '1997',
        genre: 'Quentin Tarantino 4',
      },
      {
        id: 'zxc5',
        title: 'Reservoir Dogs',
        releasedate: '2006',
        genre: 'Quentin Tarantino 5',
      },
      {
        id: 'zxc6',
        title: 'Four Rooms',
        releasedate: '1995',
        genre: 'Quentin Tarantino 6',
      },
      {
        id: 'zxc7',
        title: 'Django Unchained',
        releasedate: '2012',
        genre: 'Quentin Tarantino 7',
      },
    ],
  }
  render() {
    const films = (
      <ul className={classes.list}>
        <Films films={this.state.films} />
      </ul>
    );

    return (
      <div className={classes.sticky_footer}>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <div className={classes.main}>
          <Cockpit />
          <div className={classes.wrap}>
            {films}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;