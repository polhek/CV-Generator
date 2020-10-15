import React, { Component } from 'react';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import './App.css';
import General from './components/General';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Education from './components/Education';
import Practical from './components/Practical';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPractical: 1,
      practicalArray: [],
    };
    this.addToPracticalArray = this.addToPracticalArray.bind(this);
  }

  addPractical = () => {
    const i = this.state.numberOfPractical;
    this.setState({
      numberOfPractical: i + 1,
    });
    console.log(this.state.practicalArray);
  };

  addToPracticalArray = (pItem) => {
    this.setState({
      practicalArray: this.state.practicalArray.concat(pItem),
    });
    console.log(this.state.practicalArray);
  };

  render() {
    const childrenOfPractical = [];
    for (let i = 0; i < this.state.numberOfPractical; i++) {
      childrenOfPractical.push(
        <Col key={i} number={i}>
          <Card style={{ marginTop: '10px' }}>
            <Card.Body>
              <Card.Title>
                <h3>Practical Experience</h3>
              </Card.Title>
              <Practical
                key={this.key}
                practicalArray={this.addToPracticalArray}
              />
            </Card.Body>
          </Card>
        </Col>
      );
    }

    return (
      <>
        <Navigation addPractical={this.addPractical} />
        <Container>
          <Col>
            <Card style={{ marginTop: '10px' }}>
              <Card.Body>
                <Card.Title>
                  <h3>General Info</h3>
                </Card.Title>
                <General />
              </Card.Body>
            </Card>
            <Card style={{ marginTop: '10px' }}>
              <Card.Body>
                <Card.Title>
                  <h3>Educational Experience</h3>
                </Card.Title>
                <Education />
              </Card.Body>
            </Card>
          </Col>
          {childrenOfPractical}
          {/* <Col>
            <Card style={{ marginTop: '10px' }}>
              <Card.Body>
                <Card.Title>
                  <h3>Practical Experience</h3>
                </Card.Title>
                <Practical />
              </Card.Body>
            </Card>
          </Col> */}
        </Container>
      </>
    );
  }
}
