const OPEN = 'redux-example/drawer/OPEN';
const CLOSED = 'redux-example/drawer/CLOSED';
const SET = 'redux-example/drawer/SET';

const initialState = {
  open: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN:
      return {
        open: true
      };
    case CLOSED:
      return {
        open: false
      };
    case SET:
      return {
        open: action.open
      };
    default:
      return state;
  }
}

export function open() {
  return { type: OPEN };
}


export function close() {
  return { type: CLOSED };
}

export function set(open) {
  return { type: SET, open };
}
