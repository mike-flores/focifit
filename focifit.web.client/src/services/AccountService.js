import axios from 'axios';

class AccountService {
   static Login(email, onSuccess, onError) {
      axios
         .get(`api/accounts/${email}/`, email, { withCredentials: true })
         .then(onSuccess)
         .catch(onError);
   }
}
export default AccountService;
