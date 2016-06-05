import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { initialize } from 'redux-form';
import { Header, RegistrationForm } from 'components';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';

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
    const style = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
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

          <Subheader>You can register by using any of the following</Subheader>
          <Paper style={style} zDepth={3} circle>Facebook</Paper>
          <Paper style={style} zDepth={3} circle>Google+</Paper>

          <Subheader>...or register directly to our webshop</Subheader>
          <RegistrationForm onSubmit={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}
