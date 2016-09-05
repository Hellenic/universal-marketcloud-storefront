import React, { Component, PropTypes } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

export default class ShippingMethods extends Component {
  static propTypes = {
    methods: PropTypes.array.isRequired
  }
  render() {
    const methods = this.props.methods.map(method =>
      <RadioButton value={method.id} label={method.name} />
    );
    return (
      <RadioButtonGroup name="shippingMethod" defaultSelected="not_light">
        {methods}
      </RadioButtonGroup>
    );
  }
}
