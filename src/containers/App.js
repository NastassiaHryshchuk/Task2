import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Film from '../components/Films/Film/Film';
import Footer from '../components/Footer/Footer';

import './App.css';
import styles from '../_scss/main.scss';

class App extends Component {
  state = {
    films: [
      { title: 'Kill Bill: Vol. 1', releasedate: '2003', genre: 'Quentin Tarantino 1' },
      { title: 'Kill Bill: Vol. 2', releasedate: '2004', genre: 'Quentin Tarantino 2' },
      { title: 'Pulp Fiction', releasedate: '1994', genre: 'Quentin Tarantino 3' },
      { title: 'Jackie Brown', releasedate: '1997', genre: 'Quentin Tarantino 4' },
      { title: 'Reservoir Dogs', releasedate: '2006', genre: 'Quentin Tarantino 5' },
      { title: 'Four Rooms', releasedate: '1995', genre: 'Quentin Tarantino 6' },
      { title: 'Django Unchained', releasedate: '2012', genre: 'Quentin Tarantino 7' },
    ],
  }
  render() {
    const films = (
      <div>
        {this.state.films.map(film => {
          return <Film 
            title={film.title} 
            releasedate={film.releasedate} 
            genre={film.genre} />
        })}
      </div>
    )

    return (
      <div className="sticky-footer">
        <Header />
        {films}
        <Footer />
      </div>
    );
  }
}

export default App;
