import React, {Component} from 'react';
import Helmet from 'react-helmet';
import Subheader from 'material-ui/Subheader';
import { Header, Container } from 'components';

export default class Cart extends Component {

  render() {
    return (
      <div>
        <Helmet title="Cart – Checkout #1"/>
        <Header title="Your products" />

          <Container>
            <Subheader>Cart will be here.</Subheader>
          </Container>
      </div>
    );
  }
}
