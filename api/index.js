const axios = require('axios')

const config = require('../config')
const urlApixuForecast = 'http://api.apixu.com/v1/forecast.json?key=55ba839b2cf045faba1185522182909&days=7&q=Dnipropetrovsk'

const baseUrl = 'http://api.apixu.com/v1/';
const forecastUrl = baseUrl + 'forecast.json?key=' + config.apiKey


const getForecastData = async url => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const mapForecastData = data => {
  const {current, forecast} = data;
  const feelsLikeC = current.feelslike_c;
  const mappedCurrent = {
    feelslikeC: feelsLikeC > 0 ? Math.ceil(feelsLikeC) : Math.floor(feelsLikeC),
    conditionText: current.condition.text,
    conditionIcon: current.condition.icon,
    tempAvgC: current.temp_c > 0 ? Math.ceil(current.temp_c) : Math.floor(current.temp_c),
    isDay: current.is_day,
    dateEpoch: current.last_updated_epoch
  }

  const mappedForecast = forecast.forecastday.map(data => {
    const maxC = data.day.maxtemp_c;
    const minC = data.day.mintemp_c;
    const avgC = data.day.avgtemp_c;

    // console.log(data)
    //maxwind_kph:
//totalprecip_in:
    //avghumidity:
    return ({
      date: data.date,
      dateEpoch: data.date_epoch,
      tempMaxC: maxC > 0 ? Math.ceil(maxC) : Math.floor(maxC),
      tempMinC: minC > 0 ? Math.ceil(minC) : Math.floor(minC),
      tempAvgC: avgC > 0 ? Math.ceil(avgC) : Math.floor(avgC),
      conditionText: data.day.condition.text,
      conditionIcon: data.day.condition.icon,
      conditionCode: data.day.condition.code,
    })
  })

  return {
    current: mappedCurrent,
    forecast: mappedForecast.slice(1) //ignore today forecast in list
  }
}

const getForecast = async () => {
  const data = await getForecastData(urlApixuForecast)
  const mappedData = mapForecastData(data)
  return mappedData
}

module.exports.getForecast = getForecast;
module.exports.getForecastHourly


