import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { GridList, GridTile } from 'material-ui/GridList';

import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';

import PriceTag from './PriceTag';
import AddCartButton from './AddCartButton';
import styles from './ProductGrid.scss';

@connect(state => ({ products: state.products.products }), { pushState: push })
export default class ProductGrid extends Component {
  static propTypes = {
    products: PropTypes.array,
    pushState: PropTypes.func
  }

  handleChange(event) {
    console.log('Search:', event.target.value);
  }

  render() {
    const { products, pushState } = this.props;

    return (
      <div className={styles.container}>
        <Subheader className={styles.header}>Products</Subheader>
        <TextField id="product-search" fullWidth
          hintText="Use anything: name, keyword, term, color, etc."
          floatingLabelText="Search for the products" onChange={this.handleChange} />
        <GridList cellHeight={300} cols={4} className={styles.list}>
          {
            products.map(product => (
              <GridTile
                key={product.id}
                title={product.name}
                subtitle={<PriceTag product={product} />}
                actionIcon={<AddCartButton product={product} />}
                className={styles.tile}>
                <img src={product.images[0]} onTouchTap={() => pushState(`/product/${product.id}/${product.name}`)} />
              </GridTile>
            ))
          }
        </GridList>
      </div>
    );
  }
}
