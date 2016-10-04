import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import Quantity from './ItemQuantity';
import styles from './CartItems.scss';

@connect(() => ({}), { pushState: push })
export default class CartItems extends Component {
  static propTypes = {
    cart: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  }

  render() {
    const { cart, onUpdate, onRemove, pushState } = this.props;
    return (
      <Table selectable={false}>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn />
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Quantity</TableHeaderColumn>
            <TableHeaderColumn>Total</TableHeaderColumn>
            <TableHeaderColumn>Actions</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {
            cart.items.map(item => (
              <TableRow key={item.id} hoverable>
                <TableRowColumn>
                  <img className={styles.image} src={item.images[0]} alt={item.name} />
                </TableRowColumn>
                <TableRowColumn onTouchTap={() => pushState(`/product/${item.id}/${item.name}`)} className={styles.link}>
                  {item.name}
                </TableRowColumn>
                <TableRowColumn>{item.price}</TableRowColumn>
                <TableRowColumn>
                  <Quantity item={item} onUpdate={onUpdate} />
                </TableRowColumn>
                <TableRowColumn>{Math.round((item.price * item.quantity) * 100) / 100}</TableRowColumn>
                <TableRowColumn>
                  <FlatButton icon={<ActionDelete />} secondary onTouchTap={() => onRemove(item)} />
                </TableRowColumn>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    );
  }
}
