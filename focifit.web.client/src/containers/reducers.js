import { LOGIN, LOGOUT } from './constants';

const initialStateUser = {
   loggedIn: false,
   email: ''
};

export const user = (state = initialStateUser, action = {}) => {
   switch (action.type) {
      case LOGIN:
         return { ...state, loggedIn: true, email: action.payload };
      case LOGOUT:
         return { ...state, loggedIn: false, email: '' };
      default:
         return state;
   }
};
