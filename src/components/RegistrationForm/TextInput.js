import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const TextInput = (props) => {
  const { id, hintText, floatText, type, fullWidth, field } = props;
  const errorText = (field.error && field.touched) ? field.error : '';
  return (
    <TextField id={id} hintText={hintText} errorText={errorText}
      floatingLabelText={floatText} fullWidth={fullWidth}
      type={type} value="" {...field} />
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
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  field: PropTypes.object
};

export default TextInput;
