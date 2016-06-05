import React, {Component} from 'react';
import Helmet from 'react-helmet';
import Subheader from 'material-ui/Subheader';
import { Header, Container } from 'components';

export default class Account extends Component {

  render() {
    return (
      <div>
        <Helmet title="Account"/>
        <Header title="Account" />

        <Container>
          <Subheader>Your account details will be here.</Subheader>
        </Container>
      </div>
    );
  }
}
