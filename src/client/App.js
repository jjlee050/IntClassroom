/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import './assets/stylesheets/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </div>
    );
  }
}
