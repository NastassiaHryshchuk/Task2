import React from 'react';
import './Films.css';

const films = (props) = {
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



        </ul>
      </div>
    </div>
  );
}

export default films;
