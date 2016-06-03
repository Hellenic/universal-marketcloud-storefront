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
        <GridList cellHeight={200} className={styles.list}>
          <Subheader>Products</Subheader>
          {
            products.map(product => (
              <GridTile
                key={product.id}
                title={product.name}
                subtitle={<span>by <b>Katja</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
                <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150" />
              </GridTile>
            ))
          }
        </GridList>
      </div>
    );
  }
}
