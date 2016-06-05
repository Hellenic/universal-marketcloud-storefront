import React, { PropTypes } from 'react';
import styles from './Header.scss';
import theme from '../../theme/mui-theme';

const Header = (props) => {
  const { palette } = theme;
  return (
    <div className={styles.container} style={{ backgroundColor: palette.primary2Color }}>
      <h1 className={styles.header} style={{ color: palette.alternateTextColor }}>{props.title}</h1>
      { props.subtitle &&
        <h2 className={styles.subheader} style={{ color: palette.alternateTextColor }}>{props.subtitle}</h2>
      }
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Header;
