import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import styles from './Notification.scss';
import theme from '../../theme/mui-theme';

const Notification = () => {
  const { palette } = theme;
  return (
    <Paper className={styles.container} style={{ backgroundColor: palette.primary2Color }} zDepth={2}>
      Hello!
    </Paper>
  );
};

Notification.propTypes = {
  error: PropTypes.object
};

export default Notification;
