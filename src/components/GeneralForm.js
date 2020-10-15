import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// A section to add general information like name, email, phone number.
export default class GeneralForm extends Component {
  render() {
    const {
      fullName,
      email,
      phoneNumber,
      handleSubmit,
      handleChange,
    } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            defaultValue={fullName}
            onChange={handleChange}
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="email"
            name="email"
            defaultValue={email}
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicTelephone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="tel"
            defaultValue={phoneNumber}
            name="phoneNumber"
            placeholder="Enter phone number"
            required
          />
        </Form.Group>
        <div style={{ display: 'flex' }}>
          <Button
            variant="primary"
            type="submit"
            style={{ marginLeft: 'auto' }}
          >
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}
