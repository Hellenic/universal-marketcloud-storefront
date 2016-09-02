import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Subheader from 'material-ui/Subheader';
import { Header, Container, CheckoutSteps } from 'components';

export default class Confirmation extends Component {
  render() {
    return (
      <div>
        <Helmet title="Order confirmation – Checkout #4" />
        <Header title="Order confirmation" />
        <CheckoutSteps activeIndex={3} />
        <Container>
          <Subheader>You have finished your order!</Subheader>
        </Container>
      </div>
    );
  }
}
