import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';

import { add } from 'redux/modules/cart';
import * as ProductUtils from 'utils/product';
import styles from './ProductGrid.scss';

@connect(state => ({ products: state.products.data }), { add })
export default class ProductGrid extends Component {
  static propTypes = {
    products: PropTypes.array,
    add: PropTypes.func.isRequired
  }

  handleClick(product) {
    console.log('Product clicked!', product);
  }

  renderAddButton(product) {
    const hasStock = ProductUtils.hasStock(product);
    const tooltip = hasStock ? `Add one ${product.name} to cart.` : `${product.name} is out of stock`;
    return (
      <IconButton disabled={!hasStock}
        onTouchTap={this.props.add.bind(this, product.id)}
        tooltip={<span>{tooltip}</span>} tooltipPosition="top-left"
        >
        <AddShoppingCart color="white" />
      </IconButton>
    );
  }

  renderPrice(product) {
    return (
      <div>
        { !product.price_discount &&
          <span><b>{product.price}</b> &euro;</span>
        }
        { product.price_discount &&
          <span>
            <span className={styles.discountprice}><b>{product.price_discount}</b> &euro;</span>&nbsp;
            <span className={styles.oldprice}><b>{product.price}</b> &euro;</span>
          </span>
        }
      </div>
    );
  }

  render() {
    const {products} = this.props;
    return (
      <div className={styles.container}>
        <GridList cellHeight={300} cols={4} className={styles.list}>
          <Subheader className={styles.header}>Products</Subheader>
          {
            products.map(product => (
              <GridTile
                key={product.id}
                title={product.name}
                subtitle={this.renderPrice(product)}
                actionIcon={this.renderAddButton(product)}
                onTouchTap={this.handleClick.bind(this, product)}>
                <img src={product.images[0]} />
              </GridTile>
            ))
          }
        </GridList>
      </div>
    );
  }
}
