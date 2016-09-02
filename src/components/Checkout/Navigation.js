import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class CheckoutNavigation extends Component {
  static propTypes = {
    activeIndex: PropTypes.number.isRequired,
    onPrevious: PropTypes.func,
    onNext: PropTypes.func
  }
  render() {
    const { activeIndex, onPrevious, onNext } = this.props;
    return (
      <div>
        <FlatButton label="Back" primary disabled={activeIndex <= 0} onTouchTap={onPrevious} />
        <RaisedButton label="Next" primary disabled={activeIndex >= 3} onTouchTap={onNext} />
      </div>
    );
  }
}
