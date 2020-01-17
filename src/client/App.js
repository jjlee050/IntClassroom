import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './assets/stylesheets/index.css';
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              {routes.map(route => (
                <Route
                  path={route}
                  render={props => (
                    // pass the sub-routes down to keep nesting
                    <route.component {...props} routes={route.routes} />
                  )}
                />
              ))}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
