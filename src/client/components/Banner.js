import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import IconAnimation from './IconAnimation';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <IconAnimation />
        <p> Testing objectives </p>
        <Button variant="primary">
          Click here to start tracking
        </Button>
      </div>
    );
  }
}
