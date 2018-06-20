import React from 'react';
import { Route, Switch } from 'react-router-dom';

import EmptyResult from './components/EmptyResult/EmptyResult';
import Home from './components/Home';

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/empty" component={EmptyResult} />
    </div>
  );
};
