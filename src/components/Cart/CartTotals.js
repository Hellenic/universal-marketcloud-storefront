import React, { Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';

export default class CartTotals extends Component {
  static propTypes = {
    cart: PropTypes.object.isRequired
  }

  render() {
    const { cart } = this.props;
    const subtotal = cart.items.reduce((a, b) => (a.quantity * a.price) + (b.quantity * b.price));
    const shipping = '0,00';
    const payment = '0,00';
    const total = subtotal;
    return (
      <div>
        <Subheader>Totals</Subheader>
        <strong>Subtotal</strong> {subtotal}<br />
        <strong>Shipping</strong> {shipping}<br />
        <strong>Payment</strong> {payment}<br />
        <strong>Total {total}</strong>
      </div>
    );
  }
}
