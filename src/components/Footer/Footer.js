import React from 'react';
import Subheader from 'material-ui/Subheader';
import styles from './Footer.scss';
import theme from '../../theme/mui-theme';

const Footer = () => {
  const { palette } = theme;
  return (
    <div className={styles.container} style={{ backgroundColor: palette.accent3Color }}>
      <Subheader>Footer</Subheader>
      <div>
        Have questions? Ask for help <a href="https://github.com/hellenic/universal-marketcloud-storefront/issues" target="_blank">on Github</a>.
      </div>
    </div>
  );
};

Footer.propTypes = {

};

export default Footer;
