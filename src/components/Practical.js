import React, { Component } from 'react';

import PracticalForm from './PracticalForm';
import PracticalView from './PracticalView';

//(company name, position title, main tasks of your jobs,
//date from and until when you worked for that company)
export default class Practical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validate: '',
      showGeneralForm: true,
      companyName: '',
      positionTitle: '',
      tasks: '',
      mainTasks: [],
      dateFrom: '',
      dateTo: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.checkDate(event);
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.validate === false) {
      this.toggleShow();
      const tasks = this.state.tasks;
      this.setState({
        mainTasks: tasks.split(','),
      });
      let pItem = {
        companyName: this.state.companyName,
        positionTitle: this.state.positionTitle,
        mainTasks: this.state.mainTasks,
        dateFrom: this.state.dateFrom,
        dateTo: this.state.dateTo,
      };
      console.log(pItem);
      this.props.practicalArray(pItem);
    }
  };

  toggleShow = () => {
    const { showGeneralForm } = this.state;

    this.setState({
      showGeneralForm: !showGeneralForm,
    });
  };

  checkDate = async (event) => {
    let d1 = new Date(this.state.dateFrom);
    let d2 = new Date(this.state.dateTo);

    if (d1.getTime() < d2.getTime()) {
      this.setState({
        validate: false,
      });
    } else {
      this.setState({
        validate: true,
      });
    }
    console.log(d1.getTime());
    console.log(d2.getTime());
    console.log(this.state.validate);
  };

  render() {
    const {
      showGeneralForm,
      companyName,
      positionTitle,
      tasks,
      mainTasks,
      dateFrom,
      dateTo,
      validate,
    } = this.state;

    const { practicalArray } = this.props;

    return showGeneralForm ? (
      <PracticalForm
        companyName={companyName}
        positionTitle={positionTitle}
        tasks={tasks}
        mainTasks={mainTasks}
        dateFrom={dateFrom}
        dateTo={dateTo}
        validate={validate}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        checkDate={this.checkDate}
      />
    ) : (
      <PracticalView
        companyName={companyName}
        positionTitle={positionTitle}
        tasks={tasks}
        mainTasks={mainTasks}
        dateFrom={dateFrom}
        dateTo={dateTo}
        toggleShow={this.toggleShow}
      />
    );
  }
}
