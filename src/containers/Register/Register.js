import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';
import { initialize } from 'redux-form';
import { create } from 'redux/modules/register';
import { display as displaySnack } from 'redux/modules/snackbar';
import { Header, RegistrationForm } from 'components';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

@connect(state => ({ created: state.register.created }), { initialize, create, displaySnack, pushState: push })
export default class Register extends Component {
  static propTypes = {
    created: PropTypes.bool,
    initialize: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    displaySnack: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.created && nextProps.created) {
      // TODO Duplicate information with RegistrationForm
      this.props.initialize('registration', {}, ['firstName', 'lastName', 'email', 'password', 'passwordRepeat']);
      this.props.displaySnack('Registration successful! You may now sign in.', 5000);
      this.props.pushState('/');
    }
  }

  handleSubmit = (data) => {
    this.props.create(data);
  }

  render() {
    return (
      <div>
        <Helmet title="Register" />
        <Header title="Register" />

        <div style={{ margin: '2em 25%' }}>
          <p>
            With the below form you can register to this webshop. Benefits of registration:
          </p>

          <ul>
            <li>Easier checkout, as your details will be filled automatically</li>
            <li>View your order history and save favourite products</li>
            <li>Receive exclusive discounts and offers</li>
          </ul>

          <Subheader>You can register by using any of the following (coming soon!)</Subheader>
          <div>
            <IconButton tooltip="Coming soon!" tooltipPosition="bottom-center" disabled>
              <FontIcon className="fa fa-facebook" />
            </IconButton>
            <IconButton tooltip="Coming soon!" tooltipPosition="bottom-center" disabled>
              <FontIcon className="fa fa-google-plus" />
            </IconButton>

            <Divider />
            <Subheader>Or register directly to our webshop</Subheader>
            <RegistrationForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}
