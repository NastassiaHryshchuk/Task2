import React from 'react';
import classes from './Cockpit.css';

const Cockpit = () => {
  return (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <div className={classes.flex_container}>
          <span className={classes.results_count}>7 movies found</span>
          <span className={classes.results_filter}>Sort by</span>
          <button className={classes.button_sub_header}>release date</button>
          <button className={classes.button_sub_header}>raiting</button>
        </div>
      </div>
    </div>
  );
};

export default Cockpit;
