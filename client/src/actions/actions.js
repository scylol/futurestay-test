export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST
});

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const fetchWeatherSuccess = weather => ({
  type: FETCH_WEATHER_SUCCESS,
  weather

});

export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';
export const fetchWeatherError = error => ({
  type: FETCH_WEATHER_ERROR,
  error
});

export const fetchWeather = () => (dispatch) => {
  dispatch(fetchWeatherRequest());
  fetch('http://api.openweathermap.org/data/2.5/forecast?zip=07735,us&APPID=0a24d823e5f48003c6b67116f14c5541').then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(data => {
    dispatch(fetchWeatherSuccess(data));
  }).catch(error => {
    dispatch(fetchWeatherError(error));
  });
};