import React from 'react';
import Subheader from 'material-ui/Subheader';
import styles from './Footer.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
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
