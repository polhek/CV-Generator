import React, { Component } from 'react';
import EducationForm from './EducationForm';
import EducationView from './EducationView';

export default class Education extends Component {
  constructor() {
    super();
    this.state = {
      showGeneralForm: true,
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: this.getDate(),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.toggleShow();
  };

  toggleShow = () => {
    const { showGeneralForm } = this.state;
    this.setState({
      showGeneralForm: !showGeneralForm,
    });
  };
  getDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    return today;
  };

  getDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
  };
  render() {
    const {
      showGeneralForm,
      schoolName,
      titleOfStudy,
      dateOfStudy,
    } = this.state;

    return showGeneralForm ? (
      <EducationForm
        showGeneralForm={showGeneralForm}
        schoolName={schoolName}
        titleOfStudy={titleOfStudy}
        dateOfStudy={dateOfStudy}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        date={this.getDate}
      />
    ) : (
      <EducationView
        schoolName={schoolName}
        titleOfStudy={titleOfStudy}
        dateOfStudy={dateOfStudy}
        toggleShow={this.toggleShow}
      />
    );
  }
}
