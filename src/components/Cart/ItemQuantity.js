import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import RemoveCircle from 'material-ui/svg-icons/content/remove-circle';

export default class CartItemQuantity extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
  }

  render() {
    const { item, onUpdate } = this.props;
    return (
      <div>
        <FlatButton
          icon={<RemoveCircle />}
          primary
          onTouchTap={() => onUpdate(item, item.quantity - 1)}
        />&nbsp;
        <TextField
          id={`${item.id}-quantity`}
          value={item.quantity}
          style={{ width: '15%', textAlign: 'center' }}
          onChange={event => onUpdate(item, event.target.value)}
        />&nbsp;
        <FlatButton
          icon={<AddCircle />}
          primary
          onTouchTap={() => onUpdate(item, item.quantity + 1)}
        />
      </div>
    );
  }
}
