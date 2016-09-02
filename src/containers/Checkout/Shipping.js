import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Subheader from 'material-ui/Subheader';
import { Header, Container, CheckoutSteps, CheckoutNavigation } from 'components';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { display as displaySnack } from 'redux/modules/snackbar';

@connect(() => ({}), { push, displaySnack })
export default class Shipping extends Component {
  static propTypes = {
    push: PropTypes.func.isRequired,
    displaySnack: PropTypes.func.isRequired
  }

  render() {
    const { push } = this.props;
    const activeIndex = 1;
    return (
      <div>
        <Helmet title="Shipping details – Checkout #2" />
        <Header title="Shipping details" />
        <CheckoutSteps activeIndex={activeIndex} />

        <Container>
          <Subheader>Here you will be able to fill in your shipping details!</Subheader>
          <CheckoutNavigation activeIndex={activeIndex} onPrevious={() => push('/cart')} onNext={() => push('/checkout/payment')} />
        </Container>
      </div>
    );
  }
}
