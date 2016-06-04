import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Cart extends Component {

  render() {
    return (
      <div className="container">
        <Helmet title="Cart – Checkout #1"/>
        <h1>Your products</h1>
      </div>
    );
  }
}
