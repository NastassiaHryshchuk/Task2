import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Logo.css';

const Logo = () => {
  return (
    <Link to="/" className={classes.logo}>netflixroulette</Link>
  );
};

export default Logo;
