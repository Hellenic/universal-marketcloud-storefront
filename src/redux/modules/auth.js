const LOAD = 'app/auth/LOAD';
const LOAD_SUCCESS = 'app/auth/LOAD_SUCCESS';
const LOAD_FAIL = 'app/auth/LOAD_FAIL';
const LOGIN = 'app/auth/LOGIN';
const LOGIN_SUCCESS = 'app/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'app/auth/LOGIN_FAIL';
const LOGOUT = 'app/auth/LOGOUT';

const initialState = {
  loggingIn: false,
  token: null,
  user: null,
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
        user: action.result.data,
        loading: false,
        error: {}
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
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
        error: {}
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        user: null,
        error: action.error
      };
    case LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}

export function load(id, token) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get(`/users/${id}`, { token })
  };
}

export function login(email, password) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: client => client.post('/users/authenticate', { data: { email, password } })
  };
}

export function logout() {
  return { type: LOGOUT };
}
