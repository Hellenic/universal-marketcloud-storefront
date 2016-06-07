const IS_VALID = 'redux-example/register/IS_VALID';
const IS_VALID_SUCCESS = 'redux-example/register/IS_VALID_SUCCESS';
const IS_VALID_FAIL = 'redux-example/register/IS_VALID_FAIL';

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
    default:
      return state;
  }
}

export function isValidEmail(data) {
  return {
    types: [IS_VALID, IS_VALID_SUCCESS, IS_VALID_FAIL],
    promise: (client) => client.post('/survey/isValid', {
      data
    })
  };
}
