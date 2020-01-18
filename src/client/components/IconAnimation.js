import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Icon from '../assets/images/logo.png';

export default class Banner extends Component {
  render() {
    return (
      <motion.div
        animate={{ rotate: 1080 }}
        transition={{ duration: 2 }}
      >
        <Image src={Icon} height="500" />
      </motion.div>
    );
  }
}
