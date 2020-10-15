import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { BsPencil } from 'react-icons/bs';

export default class PracticalView extends Component {
  render() {
    const {
      companyName,
      positionTitle,
      mainTasks,
      dateFrom,
      dateTo,
      toggleShow,
    } = this.props;
    return (
      <div>
        <div>
          <h4>Company name</h4>
          <p>{companyName}</p>
          <h4>Position Title</h4>
          <p>{positionTitle}</p>
          <h4>Tasks on the Job</h4>
          <ul>
            {mainTasks.map((task) => {
              return <li key={task}>{task}</li>;
            })}
          </ul>
          <h4>Worked from</h4>
          <p>{dateFrom}</p>
          <h4>Worked to</h4>
          <p>{dateTo}</p>
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
            Edit Practical Experience Info
          </Button>
        </div>
      </div>
    );
  }
}
