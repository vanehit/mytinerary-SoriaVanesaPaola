// Reducer de autenticación
const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
      };
    case 'LOGIN_FAILURE':
    case 'REGISTER_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
      case 'LOGOUT_SUCCESS':
        return {
          ...state,
          isAuthenticated: false,
        };
    default:
      return state;
  }
};

export default authReducer;
