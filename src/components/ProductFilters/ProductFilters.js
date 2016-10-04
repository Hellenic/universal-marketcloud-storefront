import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { applyFilter } from 'redux/modules/products';
import TextField from 'material-ui/TextField';
import styles from './ProductFilters.scss';

@connect(() => ({}), { applyFilter })
export default class ProductFilters extends Component {
  static propTypes = {
    applyFilter: PropTypes.func.isRequired
  }

  handleChange(key, searchQuery) {
    this.props.applyFilter(key, (product) => {
      // TODO Could have a list of searchable properties and map those values to one string
      const searchable = product.name.toLowerCase();
      return searchable.includes(searchQuery.toLowerCase());
    });
  }

  render() {
    // TODO Filtering will happen now onChange event, which is very slow
    return (
      <div className={styles.container}>
        <TextField
          id="product-search"
          fullWidth
          hintText="Search products by name"
          floatingLabelText="Search for the products"
          onChange={event => this.handleChange('text', event.target.value)}
        />
      </div>
    );
  }
}
