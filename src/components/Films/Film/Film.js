import React from 'react';
import classes from './Film.css';

const film = (props) => {
  return (
    <li className={classes.list_item}>
      <div className={classes.flex_container}>
        <span className={classes.list_item_title}>{props.title}</span>
        <span className={classes.list_item_release_date}>{props.releasedate}</span>
      </div>
      <span className={classes.list_item_genre}>{props.genre}</span>
    </li>
  );
};

export default film;
