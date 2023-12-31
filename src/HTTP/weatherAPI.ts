import axios from 'axios';
import { IWeatherJSON } from '../types/weatherJSON';
import { ICityAPI } from '../stores/stores';

export function getWeatherForecasts({
  cityDatas,
}: {
  cityDatas: ICityAPI | null;
}) {
  return new Promise<IWeatherJSON>((resolve, reject) => {
    const weatherData = {
      city: '',
      weather: '',
      weatherDescription: '',
      temperature: 0,
    };

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${cityDatas?.lon}&lon=${cityDatas?.lat}&appid=147b1ccda52637b3e703a5c4451e2652`
      )
      .then((response) => {
        weatherData.city = response.data.name;
        weatherData.weather = response.data.weather[0].main;
        weatherData.weatherDescription = response.data.weather[0].description;
        weatherData.temperature = response.data.main.temp;

        resolve(weatherData);
      })
      .catch((error) => {
        console.error(error);
      });
  });
}
