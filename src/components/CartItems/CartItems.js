import React, { Component, PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import styles from './CartItems.scss';

export default class CartItems extends Component {
  static propTypes = {
    items: PropTypes.array
  }

  render() {
    const { items } = this.props;
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
            items.map(item => (
              <TableRow>
                <TableRowColumn>
                  <img className={styles.image} src={item.images[0]} />
                </TableRowColumn>
                <TableRowColumn>{item.name}</TableRowColumn>
                <TableRowColumn>{item.price}</TableRowColumn>
                <TableRowColumn>{item.quantity}</TableRowColumn>
                <TableRowColumn>{item.price * item.quantity}</TableRowColumn>
                <TableRowColumn>
                  <FlatButton icon={<ActionDelete />} linkButton secondary disabled />
                </TableRowColumn>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    );
  }
}
