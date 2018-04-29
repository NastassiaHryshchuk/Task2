import React from 'react';
import classes from './Film.css';

import kill from '../../../assets/kill_bill_vol_1.jpg';

const Film = (props) => {
  return (
    <a href="#" className={classes.list_item}>
      <img src={kill} width="400" height="600" alt="Kill Bill 1" />
      <div className={classes.flex_container}>
        <span className={classes.list_item_title}>{props.title}</span>
        <span className={classes.list_item_release_date}>{props.releasedate}</span>
      </div>
      <span className={classes.list_item_genre}>{props.genre}</span>
    </a>
  );
};

export default Film;
