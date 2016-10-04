import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Subheader from 'material-ui/Subheader';
import { Header, Container, CheckoutSteps, CheckoutNavigation } from 'components';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

@connect(() => ({}), { push })
export default class Shipping extends Component {
  static propTypes = {
    push: PropTypes.func.isRequired
  }

  render() {
    const { push } = this.props;
    const activeIndex = 2;
    return (
      <div>
        <Helmet title="Payment details – Checkout #3" />
        <Header title="Payment details" />
        <CheckoutSteps activeIndex={activeIndex} />

        <Container>
          <Subheader>Here you will be able to fill in your shipping details!</Subheader>
          <CheckoutNavigation activeIndex={activeIndex} onPrevious={() => push('/checkout/shipping')} onNext={() => push('/checkout/confirmation')} />
        </Container>
      </div>
    );
  }
}
