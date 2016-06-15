import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { getVisibleProducts } from 'redux/modules/products';
import { GridList, GridTile } from 'material-ui/GridList';
// import { getColumnCount } from 'utils/screen';

import PriceTag from './PriceTag';
import AddCartButton from './AddCartButton';
import styles from './ProductGrid.scss';

@connect(state => ({ productState: state.products }), { pushState: push })
export default class ProductGrid extends Component {
  static propTypes = {
    productState: PropTypes.object.isRequired,
    pushState: PropTypes.func.isRequired
  }

  render() {
    const { productState, pushState } = this.props;
    const visibleProducts = getVisibleProducts(productState);
    return (
      <div className={styles.container}>
        <GridList cellHeight={300} cols={4} className={styles.list}>
          {
            visibleProducts.map(product => (
              <GridTile
                key={product.id}
                title={product.name}
                subtitle={<PriceTag product={product} />}
                actionIcon={<AddCartButton product={product} />}
                className={styles.tile}>
                <img src={product.images[0]} onTouchTap={() => pushState(`/product/${product.id}/${product.name}`)} alt={product.name} />
              </GridTile>
            ))
          }
        </GridList>
      </div>
    );
  }
}
