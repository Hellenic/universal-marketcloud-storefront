import Marketcloud from 'marketcloud-node';
import config from '../../config';

const LOAD = 'app/contents/LOAD';
const LOAD_SUCCESS = 'app/contents/LOAD_SUCCESS';
const LOAD_FAIL = 'app/contents/LOAD_FAIL';

const initialState = {
  loaded: false
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
        data: action.result
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
  // TODO I believe it would be cleaner if I make new ApiClient for Marketcloud
  const marketcloud = new Marketcloud.Client({
    public_key: config.marketcloud.publicKey,
    secret_key: config.marketcloud.secretKey
  });
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: () => marketcloud.contents.list({})
  };
}
