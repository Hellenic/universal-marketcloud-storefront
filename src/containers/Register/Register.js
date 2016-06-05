import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { initialize } from 'redux-form';
import { Header, RegistrationForm } from 'components';

@connect(() => ({}), {initialize})
export default class Register extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired
  }

  handleSubmit = (data) => {
    console.log('Data submitted! ' + JSON.stringify(data));
    this.props.initialize('registration', {});
  }

  render() {
    return (
      <div>
        <Helmet title="Register"/>
        <Header title="Register"/>

        <div style={{ margin: '2em 25%' }}>
          <p>
            With the below form you can register to this webshop. Benefits of registration:
          </p>

          <ul>
            <li>Easier checkout, as your details will be filled automatically</li>
            <li>View your order history and save favourite products</li>
            <li>Receive exclusive discounts and offers</li>
          </ul>

          <RegistrationForm onSubmit={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}
