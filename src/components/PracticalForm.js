import React, { Component } from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default class PracticalForm extends Component {
  render() {
    const {
      companyName,
      positionTitle,
      tasks,
      dateFrom,
      dateTo,
      handleChange,
      handleSubmit,
      validate,
    } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicCompanyName">
          <Form.Label>Company name</Form.Label>
          <Form.Control
            defaultValue={companyName}
            onChange={handleChange}
            name="companyName"
            type="text"
            placeholder="Enter the company you worked in"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPositionTitle">
          <Form.Label>Position title</Form.Label>
          <Form.Control
            defaultValue={positionTitle}
            onChange={handleChange}
            name="positionTitle"
            type="text"
            placeholder="Enter the position you had in a company"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicCompanyTasks">
          <Form.Label>Tasks in company</Form.Label>
          <Form.Control
            defaultValue={tasks}
            onChange={handleChange}
            name="tasks"
            type="text"
            placeholder="Enter the tasks you had in a company"
            required
          />
          <Form.Text className="text-muted">
            Example: Programming, cooking, dancing, ...
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicDateFrom">
          <Form.Label>Worked from</Form.Label>
          <Form.Control
            onChange={(e) => {
              handleChange(e);
            }}
            type="date"
            defaultValue={dateFrom}
            name="dateFrom"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicDateUntil">
          <Form.Label>Worked to</Form.Label>
          <Form.Control
            isInvalid={validate}
            onChange={(e) => {
              handleChange(e);
            }}
            // onChange={(e) => {
            //   handleChange(e);
            //   checkDate();
            // }}
            type="date"
            defaultValue={dateTo}
            name="dateTo"
            required
          />
          <Form.Control.Feedback type="invalid">
            Date must be later then date from when you worked...
          </Form.Control.Feedback>
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
