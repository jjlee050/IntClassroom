import React, { Component } from 'react';

import Banner from '../components/Banner';

import '../assets/stylesheets/home.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <Banner />
      </div>
    );
  }
}

export default HomePage;
