import React from 'react';
import classes from './Cockpit.css';

const Cockpit = () => {
  return (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <div className={classes.flex_container}>
          <span className={classes.results_count}>7 movies found</span>
          <form className={classes.results_filter}>
            <span>Sort by</span>
            <input type="radio" id="releasedateChoice" name="film" value="release date" className={classes.toggle_sub} />
            <label htmlFor="releasedateChoice" className={classes.ancore_sub}>release date</label>
            <input type="radio" id="raitingChoice" name="film" value="raiting" className={classes.toggle_sub} />
            <label htmlFor="raitingChoice" className={classes.ancore_sub}>raiting</label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cockpit;
