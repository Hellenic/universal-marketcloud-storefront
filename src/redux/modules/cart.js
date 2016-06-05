import Marketcloud from 'marketcloud-node';
import config from '../../config';

const ADD = 'app/cart/ADD';
const ADD_SUCCESS = 'app/cart/ADD_SUCCESS';
const ADD_FAIL = 'app/cart/ADD_FAIL';
const REMOVE = 'app/cart/REMOVE';
const UPDATE = 'app/cart/UPDATE';

const initialState = {
  items: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        // items: items.push(action.item)
      };
    case REMOVE:
      return {
        ...state
      };
    case UPDATE:
      return {
        ...state
      };
    default:
      return state;
  }
}

export function add(productId, quantity = 1) {
  // TODO I believe it would be cleaner if I make new ApiClient for Marketcloud
  const marketcloud = new Marketcloud.Client({
    public_key: config.marketcloud.publicKey,
    secret_key: config.marketcloud.secretKey
  });

  return {
    types: [ADD, ADD_SUCCESS, ADD_FAIL],
    promise: () => marketcloud.carts.create({
      items: [{ product_id: productId, quantity: quantity }]
    })
  };
}

export function remove(itemId) {
  return { type: REMOVE, itemId };
}

export function update(itemId, quantity) {
  return { type: UPDATE, itemId, quantity };
}
