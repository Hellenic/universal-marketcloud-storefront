const LOAD = 'app/auth/LOAD';
const LOGIN = 'app/auth/LOGIN';
const LOGIN_SUCCESS = 'app/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'app/auth/LOGIN_FAIL';
const LOGOUT = 'app/auth/LOGOUT';

const initialState = {
  loggingIn: false,
  token: null,
  user: null,
  errors: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        token: null,
        user: null,
        errors: []
      };
    case LOGIN:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      const auth = action.result.data;
      return {
        ...state,
        loggingIn: false,
        token: auth.token,
        user: auth.user,
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
    promise: (client) => client.post('/users/authenticate', { data: { email, password }})
  };
}

export function logout() {
  return { type: LOGOUT };
}
