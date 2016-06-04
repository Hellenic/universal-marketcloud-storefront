import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
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
          <Subheader>Products</Subheader>
          {
            products.map(product => {
              return (
                <GridTile
                  key={product.id}
                  title={product.name}
                  subtitle={<span>by <b>Katja</b></span>}
                  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
                  <img src={product.images[0]} />
                </GridTile>
              );
            })
          }
        </GridList>
      </div>
    );
  }
}
