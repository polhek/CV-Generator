import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default class Navigation extends Component {
  render() {
    const { addPractical } = this.props;
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="m-auto" display="flex">
          Generate your CV
        </Navbar.Brand>
        <Button onClick={addPractical} text-align="center" variant="primary">
          Add Practical Experience
        </Button>
      </Navbar>
    );
  }
}
