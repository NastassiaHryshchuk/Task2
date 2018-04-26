import React, { Component } from 'react';
import Header from './Header/Header';
import Films from './Films/Films';
import Footer from './Footer/Footer';

import './App.css';
import styles from './_scss/main.scss';

class App extends Component {
  render() {
    return (
      <div className="xxx">
        <Header />
        <Films />
        <Footer />
      </div>
    );
  }
}

export default App;
