import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Subheader from 'material-ui/Subheader';
import { Header, Container, CheckoutSteps, CheckoutNavigation, ShippingMethods } from 'components';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { load } from 'redux/modules/shipping';

@connect(state => ({ methods: state.shipping.methods }), { push, loadMethods: load })
export default class Shipping extends Component {
  static propTypes = {
    push: PropTypes.func.isRequired,
    methods: PropTypes.array,
    loadMethods: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    props.loadMethods();
  }

  render() {
    const { push, methods } = this.props;
    const activeIndex = 1;
    return (
      <div>
        <Helmet title="Shipping details – Checkout #2" />
        <Header title="Shipping details" />
        <CheckoutSteps activeIndex={activeIndex} />

        <Container>
          <Subheader>Here you will be able to fill in your shipping details!</Subheader>
          <ShippingMethods methods={methods} />
          <CheckoutNavigation activeIndex={activeIndex} onPrevious={() => push('/cart')} onNext={() => push('/checkout/payment')} />
        </Container>
      </div>
    );
  }
}
