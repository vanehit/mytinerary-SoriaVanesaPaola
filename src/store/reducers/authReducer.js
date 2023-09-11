import { loginUser, registerUser } from '../../store/actions/authActions';

const initialState = {
  isAuthenticated: false, //estado inicial de la autenticación
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginUser.type: 
      return {
        ...state,
        isAuthenticated: true, 
      };
    case registerUser.type: 
      return {
        ...state,
        isAuthenticated: false, 
      };
    // Otros casos
    default:
      return state;
  }
};

export default authReducer;
