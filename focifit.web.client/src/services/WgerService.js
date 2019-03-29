import axios from 'axios';

class WgerService {
   static ReadExerciseByMuscle(muscle, onSuccess, onError) {
      axios
         .get(`https://wger.de/api/v2/exercise/?status=2&language=2&limit=500&muscles=${muscle}`, {
            headers: {
               Authorization: 'Token 0dfa76bc3e53d2a90bf8f8e04d0aa1bd3045195e'
            }
         })
         .then(onSuccess)
         .catch(onError);
   }
   static ReadAllEquipment(onSuccess, onError) {
      axios
         .get(`https://wger.de/api/v2/equipment/`, {
            headers: {
               Authorization: 'Token 0dfa76bc3e53d2a90bf8f8e04d0aa1bd3045195e'
            }
         })
         .then(onSuccess)
         .catch(onError);
   }
}
export default WgerService;
