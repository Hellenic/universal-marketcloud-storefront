const LOAD = 'app/auth/LOAD';
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
        token: null,
        user: null,
        error: {}
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
        ...state
      };
    default:
      return state;
  }
}

export function load() {
  return { type: LOAD };
}

export function login(email, password) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.post('/users/authenticate', { data: { email, password } })
  };
}

export function logout() {
  return { type: LOGOUT };
}
