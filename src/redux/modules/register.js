const CREATE = 'app/register/CREATE';
const CREATE_SUCCESS = 'app/register/CREATE_SUCCESS';
const CREATE_FAIL = 'app/register/CREATE_FAIL';

const initialState = {
  created: false,
  error: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        created: false
      };
    case CREATE_SUCCESS:
      return {
        ...state,
        errors: [],
        created: true
      };
    case CREATE_FAIL:
      return {
        ...state,
        created: false,
        error: action.error
      };
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
    promise: client => client.post('/users', { data: customer })
  };
}
