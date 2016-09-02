import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import RemoveCircle from 'material-ui/svg-icons/content/remove-circle';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import styles from './CartItems.scss';

@connect(() => ({}), { pushState: push })
export default class CartItems extends Component {
  static propTypes = {
    cart: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  }

  render() {
    const { cart, pushState } = this.props;
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn />
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Quantity</TableHeaderColumn>
            <TableHeaderColumn>Total</TableHeaderColumn>
            <TableHeaderColumn>Actions</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            cart.items.map(item => (
              <TableRow key={item.id}>
                <TableRowColumn>
                  <img className={styles.image} src={item.images[0]} alt={item.name} />
                </TableRowColumn>
                <TableRowColumn onTouchTap={() => pushState(`/product/${item.id}/${item.name}`)} className={styles.link}>
                  {item.name}
                </TableRowColumn>
                <TableRowColumn>{item.price}</TableRowColumn>
                <TableRowColumn>
                  <FlatButton icon={<RemoveCircle />} primary onTouchTap={(that) => console.log('Ref', that)} />&nbsp;
                  <TextField defaultValue={item.quantity} style={{ width: '15%', textAlign: 'center' }} />&nbsp;
                  <FlatButton icon={<AddCircle />} primary />
                </TableRowColumn>
                <TableRowColumn>{item.price * item.quantity}</TableRowColumn>
                <TableRowColumn>
                  <FlatButton icon={<ActionDelete />} linkButton secondary onTouchTap={() => this.props.onRemove(item)} />
                </TableRowColumn>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    );
  }
}
