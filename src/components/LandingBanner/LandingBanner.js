import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Web from 'material-ui/svg-icons/av/web';

import config from '../../config';
import styles from './LandingBanner.scss';
import theme from '../../theme/mui-theme';

export default class LandingBanner extends Component {
  render() {
    const { palette } = theme;
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.banner} style={{ backgroundColor: palette.primary2Color }}>
        <div className={styles.image}>
          <img src={logoImage}/>
        </div>
        <h1 className={styles.header} style={{ color: palette.alternateTextColor }}>{config.app.title}</h1>
        <h2 className={styles.subheader} style={{ color: palette.alternateTextColor }}>{config.app.description}</h2>

        <FlatButton
          label="View on Github"
          href="https://github.com/hellenic/universal-marketcloud-storefront"
          secondary
          linkButton
          icon={<FontIcon className="fa fa-github" />} />
        <FlatButton
          label="View demo"
          href="http://karkk.ai:7998/"
          secondary
          linkButton
          icon={<Web />} />
      </div>
    );
  }
}
