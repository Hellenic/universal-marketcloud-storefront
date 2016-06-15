const LOAD = 'app/contents/LOAD';
const LOAD_SUCCESS = 'app/contents/LOAD_SUCCESS';
const LOAD_FAIL = 'app/contents/LOAD_FAIL';

const initialState = {
  posts: [],
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
        posts: action.result.data
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.blog && globalState.blog.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('/contents')
  };
}
