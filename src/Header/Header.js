import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="header">
            <div className="wrap">
                <span className="logo">netflixroulette</span>
                <h2>Find your move</h2>
                 <input type="text" value="Quentin Tarantino" />
                <div className="flex-container">
                    <span className="span-search">Search by</span>
                    <button className="button-title">Title</button>
                    <button className="button-director">Director</button>
                    <button className="flex-left button-search">Search</button>
                </div>
            </div >
      </header>
    );
  }
}

export default Header;
