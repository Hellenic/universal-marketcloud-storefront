import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import styles from './ProductGrid.scss';

@connect(state => ({ products: state.products.data }))
export default class ProductGrid extends Component {
  static propTypes = {
    products: PropTypes.array
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
                subtitle={<span><b>{product.price}</b> &euro;</span>}
                actionIcon={<IconButton><AddShoppingCart color="white" /></IconButton>}>
                <img src={product.images[0]} />
              </GridTile>
            ))
          }
        </GridList>
      </div>
    );
  }
}
