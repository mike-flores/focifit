import { LOGIN, LOGOUT } from './constants';

export const setLoggedIn = email => {
   return {
      type: LOGIN,
      payload: email
   };
};

export const setLoggedOut = () => {
   return {
      type: LOGOUT,
      payload: false
   }
}
