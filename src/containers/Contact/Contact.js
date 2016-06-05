import React, {Component} from 'react';
import Helmet from 'react-helmet';
import Subheader from 'material-ui/Subheader';
import { Header, Container } from 'components';

export default class ContactUs extends Component {

  render() {
    return (
      <div>
        <Helmet title="Contact Us"/>
        <Header title="Contact Us" />

        <Container>
          <Subheader>Contact details and/or company information could be here.</Subheader>
        </Container>
      </div>
    );
  }
}
