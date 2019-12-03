const axios = require("axios");

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_BASE_PARAMETERS = "&appid=7825ce4ffa896c5019e53087c858568a&units=metric&lang=en"


async function fetchWeatherByCityName(cityName) {
  const API_URL = `${API_BASE_URL}?q=${cityName}${API_BASE_PARAMETERS}`;

  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

async function fetchWeatherByCoords(lat, lon) {
  const API_URL = `${API_BASE_URL}?lat=${lat}&lon=${lon}${API_BASE_PARAMETERS}`;

  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}


module.exports = {
  fetchWeatherByCityName,
  fetchWeatherByCoords,
};
