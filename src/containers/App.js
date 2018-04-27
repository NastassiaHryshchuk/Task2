import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Films from '../components/Films/Films';
import Footer from '../components/Footer/Footer';

import './App.css';
import styles from '../_scss/main.scss';

class App extends Component {
  state = {
    films: [
      { id: 'zxc1', title: 'Kill Bill: Vol. 1', releasedate: '2003', genre: 'Quentin Tarantino 1' },
      { id: 'zxc2', title: 'Kill Bill: Vol. 2', releasedate: '2004', genre: 'Quentin Tarantino 2' },
      { id: 'zxc3', title: 'Pulp Fiction', releasedate: '1994', genre: 'Quentin Tarantino 3' },
      { id: 'zxc4', title: 'Jackie Brown', releasedate: '1997', genre: 'Quentin Tarantino 4' },
      { id: 'zxc5', title: 'Reservoir Dogs', releasedate: '2006', genre: 'Quentin Tarantino 5' },
      { id: 'zxc6', title: 'Four Rooms', releasedate: '1995', genre: 'Quentin Tarantino 6' },
      { id: 'zxc7', title: 'Django Unchained', releasedate: '2012', genre: 'Quentin Tarantino 7' },
    ],
  }
  render() {
    const films = (
      <ul className="list">
        <Films films={this.state.films} />
      </ul>
    )

    return (
      <div className="sticky-footer">
        <Header />
        <div className="main">
          <div className="wrap">
            <div className="container">
              <div className="flex-container">
                <span className="results-count">7 movies found</span>
                <span className="flex-left results-filter">Sort by</span>
                <button className="button-sub-header">release date</button>
                <button className="button-sub-header">raiting</button>
              </div>
            </div>
          </div>
          <div className="wrap">
            {films}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
