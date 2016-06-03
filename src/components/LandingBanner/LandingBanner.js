import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import config from '../../config';
import styles from './LandingBanner.scss';
import { indigo50, indigo500 } from 'material-ui/styles/colors';

export default class LandingBanner extends Component {
  render() {
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.banner} style={{ backgroundColor: indigo500 }}>
        <div className={styles.image}>
          <img src={logoImage}/>
        </div>
        <h1 className={styles.header} style={{ color: indigo50 }}>{config.app.title}</h1>
        <h2 className={styles.subheader} style={{ color: indigo50 }}>{config.app.description}</h2>

        <FlatButton
          label="View on Github"
          href="https://github.com/hellenic/universal-marketcloud-storefront"
          primary
          linkButton
          icon={<FontIcon className="fa fa-github" />} />
      </div>
    );
  }
}
