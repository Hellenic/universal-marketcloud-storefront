import React from 'react';
import Helmet from 'react-helmet';
import Subheader from 'material-ui/Subheader';
import { Header, Container } from 'components';
import theme from '../../theme/mui-theme';

const NotFound = () => {
  const { palette } = theme;
  return (
    <div>
      <Helmet title="Page not found - 404" />
      <Header title="Page was not found" subtitle="404 - That's the error." backgroundColor={palette.accent1Color} />

      <Container>
        <Subheader>The page you were looking for was not found. Move along now.</Subheader>
      </Container>
    </div>
  );
};

export default NotFound;
