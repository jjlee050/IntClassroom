import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import ViewResultPage from './views/ViewResultPage';
import StatsPage from './views/StatsPage';

function routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/view-result" component={ViewResultPage} />
      <Route path="/stats" component={StatsPage} />
    </Switch>
  );
}

export default routes;
