const LOAD = 'app/checkout/shipping/LOAD';
const LOAD_SUCCESS = 'app/checkout/shipping/LOAD_SUCCESS';
const LOAD_FAIL = 'app/checkout/shipping/LOAD_FAIL';

const initialState = {
  loading: false,
  methods: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
        error: {}
      };
    case LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        methods: action.result.data
      };
    }
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('/shippings')
  };
}
