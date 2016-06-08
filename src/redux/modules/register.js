const IS_VALID = 'app/register/IS_VALID';
const IS_VALID_SUCCESS = 'app/register/IS_VALID_SUCCESS';
const IS_VALID_FAIL = 'app/register/IS_VALID_FAIL';
const CREATE = 'app/register/CREATE';
const CREATE_SUCCESS = 'app/register/CREATE_SUCCESS';
const CREATE_FAIL = 'app/register/CREATE_FAIL';

const initialState = {
  saveError: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case IS_VALID:
      return state; // 'saving' flag handled by redux-form
    case IS_VALID_SUCCESS:
      return {
        ...state,
        saveError: null,
      };
    case IS_VALID_FAIL:
      return typeof action.error === 'string' ? {
        ...state,
        saveError: action.error
      } : state;
    case CREATE:
      return state;
    case CREATE_SUCCESS:
      return state;
    case CREATE_FAIL:
      return state;
    default:
      return state;
  }
}

export function create(data) {
  const customer = {
    name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    password: data.password
  };
  return {
    types: [CREATE, CREATE_SUCCESS, CREATE_FAIL],
    promise: client => client.post('/users', customer)
  };
}

export function isValidEmail(email) {
  return {
    types: [IS_VALID, IS_VALID_SUCCESS, IS_VALID_FAIL],
    promise: client => client.get('/users/' + email)
  };
}
