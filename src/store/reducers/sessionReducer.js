export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

const initialState = {
  isLoggedIn: Boolean(localStorage.getItem('auth')),
  error: null,
  token: null,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        error: null,
        token: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload,
        token: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        error: null,
        token: null,
      };
    default:
      return state;
  }
};

export default sessionReducer;
