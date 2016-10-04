const ADD = 'app/cart/ADD';
const ADD_SUCCESS = 'app/cart/ADD_SUCCESS';
const ADD_FAIL = 'app/cart/ADD_FAIL';
const REMOVE = 'app/cart/REMOVE';
const REMOVE_SUCCESS = 'app/cart/REMOVE_SUCCESS';
const REMOVE_FAIL = 'app/cart/REMOVE_FAIL';

const initialState = {
  loading: false,
  id: null,
  items: [],
  error: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        loading: true,
        error: {}
      };
    case ADD_SUCCESS: {
      const data = action.result.data;
      return {
        ...state,
        loading: false,
        id: data.id,
        items: data.items
      };
    }
    case ADD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case REMOVE:
      return {
        ...state,
        loading: true,
        error: {}
      };
    case REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.result.data.items
      };
    case REMOVE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

// Cart is created with POST, existing cart is updated with PATCH
export function add(productId, quantity = 1, cartId = '') {
  const method = (cartId) ? 'patch' : 'post';
  const operation = (cartId) ? 'update' : 'add';
  return {
    types: [ADD, ADD_SUCCESS, ADD_FAIL],
    promise: client => client[method](`/carts/${cartId}`, {
      data: {
        op: operation,
        items: [{ product_id: productId, quantity }]
      }
    })
  };
}

export function remove(productId, cartId = '') {
  return {
    types: [REMOVE, REMOVE_SUCCESS, REMOVE_FAIL],
    promise: client => client.patch(`/carts/${cartId}`, {
      data: {
        op: 'remove',
        items: [{ product_id: productId }]
      }
    })
  };
}
