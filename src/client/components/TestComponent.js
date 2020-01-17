import React, { Component } from 'react';
import ReactImage from '../assets/images/react.png';

export default class TestComponent extends Component {
  render() {
    return (
      <div>
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
