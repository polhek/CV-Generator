import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class EducationForm extends Component {
  render() {
    const {
      schoolName,
      titleOfStudy,
      dateOfStudy,
      handleChange,
      handleSubmit,
    } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicSchoolName">
          <Form.Label>School name</Form.Label>
          <Form.Control
            defaultValue={schoolName}
            onChange={handleChange}
            name="schoolName"
            type="text"
            placeholder="Enter your school name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title of Study</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="titleOfStudy"
            defaultValue={titleOfStudy}
            placeholder="Enter the title of your study"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicDate">
          <Form.Label>Date of Study</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="date"
            defaultValue={dateOfStudy}
            name="dateOfStudy"
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
