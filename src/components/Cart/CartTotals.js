import React, { Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';

export default class CartTotals extends Component {
  static propTypes = {
    cart: PropTypes.object.isRequired
  }

  render() {
    const { cart } = this.props;
    const subtotal = (cart.items.length > 1) ? cart.items.reduce((a, b) => (a.quantity * a.price) + (b.quantity * b.price)) : (cart.items[0].quantity * cart.items[0].price);
    const shipping = '0,00';
    const payment = '0,00';
    const total = subtotal;
    return (
      <div>
        <Subheader>Totals</Subheader>
        <p><strong>Subtotal</strong> {subtotal}</p>
        <p><strong>Shipping</strong> {shipping}</p>
        <p><strong>Payment</strong> {payment}</p>
        <strong>Total {total}</strong>
      </div>
    );
  }
}
