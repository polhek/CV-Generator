import React, { Component } from 'react';
import GeneralForm from './GeneralForm';
import GeneralView from './GeneralView';

export default class General extends Component {
  constructor() {
    super();
    this.state = {
      showGeneralForm: true,
      fullName: '',
      email: '',
      phoneNumber: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
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
  render() {
    const { fullName, email, phoneNumber, showGeneralForm } = this.state;

    return showGeneralForm ? (
      <GeneralForm
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    ) : (
      <GeneralView
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        toggleShow={this.toggleShow}
      />
    );
  }
}
