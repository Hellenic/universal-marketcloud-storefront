const ADD = 'app/cart/ADD';
const ADD_SUCCESS = 'app/cart/ADD_SUCCESS';
const ADD_FAIL = 'app/cart/ADD_FAIL';
const REMOVE = 'app/cart/REMOVE';

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
        loading: true
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
        ...state
      };
    default:
      return state;
  }
}

// Cart is created with POST, existing cart is updated with PATCH
export function add(productId, quantity = 1, cartId = '') {
  const method = (cartId) ? 'patch' : 'post';

  return {
    types: [ADD, ADD_SUCCESS, ADD_FAIL],
    promise: (client) => client[method](`/carts/${cartId}`, {
      data: {
        op: 'update',
        items: [{ product_id: productId, quantity }]
      }
    })
  };
}

export function remove(itemId) {
  return { type: REMOVE, itemId };
}
