import React from 'react';
import Helmet from 'react-helmet';
import Subheader from 'material-ui/Subheader';
import { Header, Container } from 'components';

const ContactUs = () => (
  <div>
    <Helmet title="Contact Us" />
    <Header title="Contact Us" />

    <Container>
      <Subheader>Contact details and/or company information could be here.</Subheader>
    </Container>
  </div>
);

export default ContactUs;
