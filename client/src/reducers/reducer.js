import {FETCH_WEATHER_SUCCESS} from '../actions/actions';
const initialState = {
    weatherArray:{}
};
  
export default function reducer(state = initialState, action) {
    if(action.type === FETCH_WEATHER_SUCCESS) {
      return {...state, weatherArray: action.weather.list}
    }
  return state;
}