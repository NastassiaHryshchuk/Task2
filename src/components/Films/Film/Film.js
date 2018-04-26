import React from 'react';
import './Film.css';

const film = (props) => {
  return (
    <li className="list-item">
      <div className="flex-container">
        <span className="list-item-title">{props.title}</span>
        <span className="flex-left list-item-release-date">{props.releasedate}</span>
      </div>
      <span className="list-item-genre">{props.genre}</span>
    </li>
  );
};

export default film;
