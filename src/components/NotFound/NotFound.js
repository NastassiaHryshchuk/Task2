import React from 'react';
import classes from './NotFound.css';

function NotFound() {
  return (
    <div className={classes.container}>
      <p className={classes.notfound}>No films found</p>
    </div>
  );
}

export default {
  component: NotFound,
};
