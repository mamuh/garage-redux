export default function carsReducer(state = [], action) {
   switch(action.type) {
     case 'FETCH_CARS':
      return action.payload
     case 'ADD_CAR':
     // todo
     default:
      return state
   }
}
