import React, { Component } from 'react';
import './Films.css';

class Films extends Component {
  render() {
    return (


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

      <ul className="list">
        <li className="list-item">
          <div className="flex-container">
            <span className="list-item-title">Kill Bill: Vol. 1</span>
            <span className="flex-left list-item-release-date">(2003)</span>
          </div>
          <span className="list-item-genre">Quentin Tarantino</span>
        </li>
        
        <li className="list-item">
          <div className="flex-container">
            <span className="list-item-title">Kill Bill: Vol. 2</span>
            <span className="flex-left list-item-release-date">(2004)</span>
          </div>
          <span className="list-item-genre">Quentin Tarantino</span>
        </li>
        
        <li className="list-item">
          <div className="flex-container">
            <span className="list-item-title">Pulp Fiction</span>
            <span className="flex-left list-item-release-date">(1994)</span>
          </div>
          <span className="list-item-genre">Quentin Tarantino</span>
        </li>

        <li className="list-item">
          <div className="flex-container">
            <span className="list-item-title">Jackie Brown</span>
            <span className="flex-left list-item-release-date">(1997)</span>
          </div>
          <span className="list-item-genre">Quentin Tarantino</span>
        </li>
          
        <li className="list-item">
          <div className="flex-container">
            <span className="list-item-title">Reservoir Dogs</span>
            <span className="flex-left list-item-release-date">(2006)</span>
          </div>
          <span className="list-item-genre">Quentin Tarantino</span>
        </li>
          
        <li className="list-item">
          <div className="flex-container">
            <span className="list-item-title">Four Rooms</span>
            <span className="flex-left list-item-release-date">(1995)</span>
          </div>
          <span className="list-item-genre">Quentin Tarantino</span>
        </li>

        <li className="list-item">
          <div className="flex-container">
            <span className="list-item-title">Django Unchained</span>
            <span className="flex-left list-item-release-date">(2012)</span>
          </div>
          <span className="list-item-genre">Quentin Tarantino</span>
        </li>
      </ul>
    </div>

</div>
    );
  }
}

export default Films;
