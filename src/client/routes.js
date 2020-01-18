import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import ViewResultPage from './views/ViewResultPage';

function routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/view-result" component={ViewResultPage} />
    </Switch>
  );
}

export default routes;
