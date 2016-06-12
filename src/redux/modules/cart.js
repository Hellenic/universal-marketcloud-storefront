const ADD = 'app/cart/ADD';
const ADD_SUCCESS = 'app/cart/ADD_SUCCESS';
const ADD_FAIL = 'app/cart/ADD_FAIL';
const REMOVE = 'app/cart/REMOVE';

const initialState = {
  loading: true,
  id: null,
  items: [],
  errors: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        loading: true
      };
    case ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        id: action.result.data.id,
        items: action.result.data.items
      };
    case ADD_FAIL:
      return {
        ...state,
        loading: false,
        errors: action.error.errors
      };
    case REMOVE:
      return {
        ...state
      };
    default:
      return state;
  }
}

// Cart is created with POST, existing cart is updated with PUT
export function add(productId, quantity = 1, cartId = '') {
  const method = (cartId) ? 'put' : 'post';

  return {
    types: [ADD, ADD_SUCCESS, ADD_FAIL],
    promise: (client) => client[method](`/carts/${cartId}`, {
      data: {
        items: [{ product_id: productId, quantity }]
      }
    })
  };
}

export function remove(itemId) {
  return { type: REMOVE, itemId };
}
