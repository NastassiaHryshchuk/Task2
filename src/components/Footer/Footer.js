import React from 'react';
import classes from './Footer.css';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrap}>
        <Logo />
      </div>
    </footer>
  );
};

export default Footer;
