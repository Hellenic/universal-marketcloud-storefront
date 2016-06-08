const LOAD = 'app/auth/LOAD';
const LOGIN = 'app/auth/LOGIN';
const LOGIN_SUCCESS = 'app/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'app/auth/LOGIN_FAIL';
const LOGOUT = 'app/auth/LOGOUT';
const LOGOUT_SUCCESS = 'app/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'app/auth/LOGOUT_FAIL';

const initialState = {
  loaded: false,
  loading: false,
  user: null,
  errors: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state
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
        token: action.result.data.token,
        user: action.result.data.user,
        errors: []
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        user: null,
        errors: action.error.errors
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
        errors: action.error.errors
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return { type: LOAD };
}

export function login(email, password) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.post('/users/authenticate', { data: { email, password }})
  };
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: (client) => client.get('/logout')
  };
}
