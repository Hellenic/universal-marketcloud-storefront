import React, { Component, PropTypes } from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';

export default class CheckoutSteps extends Component {
  static propTypes = {
    activeIndex: PropTypes.number.isRequired
  }

  render() {
    return (
      <Stepper activeStep={this.props.activeIndex}>
        <Step>
          <StepLabel>Your products</StepLabel>
        </Step>
        <Step>
          <StepLabel>Shipping details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>
    );
  }
}
