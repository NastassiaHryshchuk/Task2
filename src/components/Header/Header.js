import React from 'react';
import classes from './Header.css';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.wrap}>
        <Logo />
        <h2>Find your move</h2>
        <form>
          <input type="text" placeholder="Search here..." required />
          <div className={classes.flex_container}>
            <span className={classes.span_search}>Search by</span>
            <input type="radio" id="titleChoice" name="film" value="title" className={classes.toggle} checked />
            <label for="titleChoice" className={classes.btn}>Title</label>
            <input type="radio" id="directorChoice" name="film" value="director" className={classes.toggle} />
            <label for="directorChoice" className={classes.btn}>Director</label>
            <button type="submit" className={classes.button_search}>Search</button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
