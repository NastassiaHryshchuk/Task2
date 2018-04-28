import React, { Component } from 'react';
import classes from './Footer.css';

class Footer extends Component {
  render() {
    return (
        <footer className={classes.footer}>
            <div className={classes.wrap}>
                <p className={classes.logo}>netflixroulette</p>
            </div>
         </footer>
    );
  }
}

export default Footer;
