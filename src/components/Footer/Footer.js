import React from 'react';
import classes from './Footer.css';

const footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrap}>
        <p className={classes.logo}>netflixroulette</p>
      </div>
    </footer>
  );
};

export default footer;