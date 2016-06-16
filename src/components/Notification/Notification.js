import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import styles from './Notification.scss';
import theme from '../../theme/mui-theme';

function prepareData(props) {
  const { palette } = theme;
  if (props.error.message) {
    return {
      background: palette.accent1Color,
      message: props.error.message
    };
  }

  if (props.warn) {
    return {
      background: palette.accent2Color,
      message: props.warn
    };
  }

  if (props.info) {
    return {
      background: palette.accent3Color,
      message: props.info
    };
  }

  return null;
}

const Notification = (props) => {
  const data = prepareData(props);
  return (data ? (
    <Paper className={styles.container} style={{ backgroundColor: data.background }} zDepth={2}>
      {data.message}
    </Paper>
  ) : null);
};

Notification.propTypes = {
  error: PropTypes.object,
  warn: PropTypes.string,
  info: PropTypes.string
};

export default Notification;
