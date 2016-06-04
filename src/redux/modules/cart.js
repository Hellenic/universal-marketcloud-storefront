const ADD = 'app/cart/ADD';
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

export function add(id) {
  console.log('TODO Add', id);
  return { type: ADD, id };
}

export function remove(id) {
  return { type: REMOVE, id };
}

export function update(id, quantity) {
  return { type: UPDATE, id, quantity };
}
