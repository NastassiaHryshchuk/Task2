import React from 'react';
import classes from './Header.css';

const header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.wrap}>
        <span className={classes.logo}>netflixroulette</span>
        <h2>Find your move</h2>
        <input type="text" value="Quentin Tarantino" />
        <div className={classes.flex_container}>
          <span className={classes.span_search}>Search by</span>
          <button className={classes.button_title}>Title</button>
          <button className={classes.button_director}>Director</button>
          <button className={classes.button_search}>Search</button>
        </div>
      </div >
    </header>
  );
};

export default header;
