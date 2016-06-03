import React, {Component, PropTypes} from 'react';
import Marketcloud from 'marketcloud-node';
import {connect} from 'react-redux';
import config from '../../config';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import styles from './ProductGrid.scss';

@connect(state => ({ time: state.info.data.time }))
export default class ProductGrid extends Component {
  static propTypes = {
    time: PropTypes.number
  }

  state = {
    products: []
  }

  componentWillMount() {
    const marketcloud = new Marketcloud.Client({
      public_key: config.marketcloud.publicKey,
      secret_key: config.marketcloud.secretKey
    });
    marketcloud.products.list({}).then(data => {
      this.setState({ products: data });
    })
    .catch(error => {
      console.log('Error while loading the products', error);
    });
  }

  render() {
    const {time} = this.props;
    const {products} = this.state;

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
        <b>Some time from state: {time}</b>
      </div>
    );
  }
}
