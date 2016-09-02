import React, { Component, PropTypes } from 'react';
import { Step, Stepper, StepButton, StepLabel } from 'material-ui/Stepper';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

@connect(() => ({}), { pushState: push })
export default class CheckoutSteps extends Component {
  static propTypes = {
    activeIndex: PropTypes.number.isRequired,
    pushState: PropTypes.func.isRequired
  }

  render() {
    const { activeIndex, pushState } = this.props;
    return (
      <Stepper activeStep={activeIndex}>
        <Step>
          <StepButton onTouchTap={() => pushState('/cart')}>
            Your products
          </StepButton>
        </Step>
        <Step>
          <StepButton onTouchTap={() => pushState('/checkout/shipping')}>
            Shipping
          </StepButton>
        </Step>
        <Step>
          <StepButton onTouchTap={() => pushState('/checkout/payment')}>
            Payment
          </StepButton>
        </Step>
        <Step>
          <StepLabel>Finished</StepLabel>
        </Step>
      </Stepper>
    );
  }
}
