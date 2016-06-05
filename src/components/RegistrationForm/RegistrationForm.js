import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import registrationValidation from './registrationValidation';
import * as surveyActions from 'redux/modules/survey';
import styles from './RegistrationForm.scss';

function asyncValidate(data, dispatch, {isValidEmail}) {
  if (!data.email) {
    return Promise.resolve({});
  }
  return isValidEmail(data);
}
@connect(() => ({}),
  dispatch => bindActionCreators(surveyActions, dispatch)
)
@reduxForm({
  form: 'registration',
  fields: ['name', 'email', 'streetAddress', 'postalCode', 'city'],
  validate: registrationValidation,
  asyncValidate,
  asyncBlurFields: ['email']
})
export default class RegistrationForm extends Component {
  static propTypes = {
    active: PropTypes.string,
    asyncValidating: PropTypes.bool.isRequired,
    fields: PropTypes.object.isRequired,
    dirty: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired
  }

  render() {
    const {
      asyncValidating,
      dirty,
      fields: {name, email, streetAddress, postalCode, city},
      active,
      handleSubmit,
      invalid,
      resetForm,
      pristine,
      valid
      } = this.props;

    const errorMsg = 'This field is required';

    return (
      <form>
        <TextField hintText="First name" errorText={errorMsg} floatingLabelText="Enter your first name" />
        <TextField hintText="Surname" errorText={errorMsg} floatingLabelText="and then your surname" />
        <br />
        <TextField hintText="Address" fullWidth />
        <br />
        <TextField hintText="Postal code" />
        <TextField hintText="City" />
        <br />
        <RaisedButton label="Register" primary />
        <RaisedButton label="Clear" />
      </form>
    );
  }
}
