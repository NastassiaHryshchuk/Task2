import React from 'react';
import classes from './EmptyResult.css';

function EmptyResult() {
  return (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <p className={classes.emptyresult}>Please, select your desired film...</p>
      </div>
    </div>
  );
}

export default EmptyResult;
