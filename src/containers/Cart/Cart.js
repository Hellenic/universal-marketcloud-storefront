import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Subheader from 'material-ui/Subheader';

import { Header, Container, CartItems, CheckoutSteps } from 'components';
import { connect } from 'react-redux';
import { remove } from 'redux/modules/cart';
import { display as displaySnack } from 'redux/modules/snackbar';

@connect(state => ({ cart: state.cart }), { remove, displaySnack })
export default class Cart extends Component {
  static propTypes = {
    cart: PropTypes.object,
    remove: PropTypes.func.isRequired,
    displaySnack: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cart.items.length > nextProps.cart.items.length) {
      this.props.displaySnack('Product was removed from your cart.');
    }
  }

  handleRemove(item) {
    this.props.remove(item.id, this.props.cart.id);
  }

  render() {
    const { cart } = this.props;

    return (
      <div>
        <Helmet title="Cart – Checkout #1" />
        <Header title="Your products" />
        <CheckoutSteps activeIndex={0} />

        <Container>
          {(cart.items.length <= 0) && <Subheader>You do not have any products in your cart yet!</Subheader>}
          {(cart.items.length > 0) && <CartItems cart={cart} onRemove={(item) => this.handleRemove(item)} />}
        </Container>
      </div>
    );
  }
}
