import Marketcloud from 'marketcloud-node';
import config from '../../config';

const LOAD = 'app/auth/LOAD';
const LOAD_SUCCESS = 'app/auth/LOAD_SUCCESS';
const LOAD_FAIL = 'app/auth/LOAD_FAIL';
const AUTH = 'app/auth/AUTH';
const AUTH_SUCCESS = 'app/auth/AUTH_SUCCESS';
const AUTH_FAIL = 'app/auth/AUTH_FAIL';
const LOGIN = 'app/auth/LOGIN';
const LOGIN_SUCCESS = 'app/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'app/auth/LOGIN_FAIL';
const LOGOUT = 'app/auth/LOGOUT';
const LOGOUT_SUCCESS = 'app/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'app/auth/LOGOUT_FAIL';

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
        user: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case AUTH:
      return {
        ...state,
        loggingIn: true
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        user: action.result
      };
    case AUTH_FAIL:
      return {
        ...state,
        loggingIn: false,
        user: null,
        loginError: action.error
      };
    case LOGIN:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        user: action.result
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        user: null,
        loginError: action.error
      };
    case LOGOUT:
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        user: null
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        logoutError: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/loadAuth')
  };
}

export function login(username, password) {
  const marketcloud = new Marketcloud.Client({
    public_key: config.marketcloud.publicKey,
    secret_key: config.marketcloud.secretKey
  });

  return {
    types: [AUTH, AUTH_SUCCESS, AUTH_FAIL],
    promise: () => marketcloud.users.authenticate(username, password)
  };
}

export function persist(username) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.post('/login', {
      data: {
        name: username
      }
    })
  };
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: (client) => client.get('/logout')
  };
}
