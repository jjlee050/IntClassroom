import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';

function routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  );
}

export default routes;
