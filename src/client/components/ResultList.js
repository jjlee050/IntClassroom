import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export default class ResultList extends Component {
  render() {
    return (
      <div>
        <Card className="my-2">
          <Card.Body>
            <h3> Results from the tracking session </h3>
            <Button>
              Click to start tracking again
            </Button>
          </Card.Body>
        </Card>
        <Card className="my-2">
          <Card.Body>
            <p> Test list item </p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
