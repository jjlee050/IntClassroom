import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconAnimation from './IconAnimation';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <IconAnimation />
        <Button
          component={Link}
          variant="contained"
          color="primary"
          to="/about"
        >
          Click here to start tracking
        </Button>
      </div>
    );
  }
}
