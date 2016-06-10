import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Subheader from 'material-ui/Subheader';

import { Header, Container, CartItems, CheckoutSteps } from 'components';
import { connect } from 'react-redux';
import { remove } from 'redux/modules/cart';

@connect(state => ({ cart: state.cart }), { remove })
export default class Cart extends Component {
  static propTypes = {
    cart: PropTypes.object,
    remove: PropTypes.func.isRequired
  }

  render() {
    const { items } = this.props.cart;

    return (
      <div>
        <Helmet title="Cart – Checkout #1"/>
        <Header title="Your products" />
        <CheckoutSteps activeIndex={0} />

        <Container>
          { (items.length <= 0) && <Subheader>You do not have any products in your cart yet!</Subheader> }
          { (items.length > 0) && <CartItems items={items} /> }
        </Container>
      </div>
    );
  }
}
