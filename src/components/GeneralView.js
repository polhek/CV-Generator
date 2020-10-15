import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { BsPencil } from 'react-icons/bs';

export default class GeneralView extends Component {
  render() {
    const { fullName, email, phoneNumber, toggleShow } = this.props;
    return (
      <div>
        <div>
          <h4>Full name</h4>
          <p>{fullName}</p>
          <h4>Email</h4>
          <p>{email}</p>
          <h4>Phone Number</h4>
          <p>{phoneNumber}</p>
        </div>
        <div style={{ display: 'flex' }}>
          <Button
            onClick={toggleShow}
            text-align="center"
            variant="primary"
            type="submit"
            style={{ marginLeft: 'auto' }}
          >
            <BsPencil style={{ marginRight: '5px' }} />
            Edit General Info
          </Button>
        </div>
      </div>
    );
  }
}
