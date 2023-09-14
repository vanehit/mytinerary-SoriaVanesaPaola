const initialState = {
  isAuthenticated: false, // Estado inicial de la autenticación
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isAuthenticated: false,
      };
    
    default:
      return state;
  }
};

export default authReducer;
