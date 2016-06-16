const LOAD = 'app/products/LOAD';
const LOAD_SUCCESS = 'app/products/LOAD_SUCCESS';
const LOAD_FAIL = 'app/products/LOAD_FAIL';
const APPLY_FILTER = 'app/products/APPLY_FILTER';

const initialState = {
  products: [],
  filters: {},
  loaded: false,
  error: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        products: action.result.data
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case APPLY_FILTER:
      return {
        ...state,
        // Add or update the filter to the filters list, for the given key
        filters: Object.assign({}, state.filters, { [action.filterKey]: action.filter })
      };
    default:
      return state;
  }
}

export function getVisibleProducts(productState) {
  if (Object.keys(productState.filters).length > 0) {
    // Go through all the filters and apply them to products to reduce the results
    return Object.values(productState.filters).reduce((filtered, filter) => productState.products.filter(filter), []);
  }

  return productState.products;
}

export function isLoaded(globalState) {
  return globalState.products && globalState.products.loaded;
}

export function applyFilter(filterKey, filter) {
  return { type: APPLY_FILTER, filterKey, filter };
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('/products')
  };
}
