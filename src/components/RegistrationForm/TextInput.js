import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const TextInput = (props) => {
  const { id, hintText, floatText, errorText, type, fullWidth, field } = props;
  const fieldError = (field.error && field.touched) ? field.error : '';
  return (
    <TextField
      id={id}
      hintText={hintText}
      errorText={errorText || fieldError}
      floatingLabelText={floatText}
      fullWidth={fullWidth}
      type={type}
      value="" {...field}
    />
  );
};

TextInput.defaultProps = {
  type: 'text',
  fullWidth: false
};

TextInput.propTypes = {
  id: PropTypes.string,
  hintText: PropTypes.string,
  floatText: PropTypes.string,
  errorText: PropTypes.string,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  field: PropTypes.object
};

export default TextInput;
