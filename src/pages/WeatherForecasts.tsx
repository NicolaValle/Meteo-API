import { useEffect, useState } from 'react';
import InfoCard from '../components/InfoCard';
import PageContainer from '../components/PageContainer';
import AuthGuard from '../guards/AuthGuard';
import { IWeatherJSON } from '../types/weatherJSON';
import { getWeatherForecasts } from '../HTTP/weatherAPI';
import { ICityAPI, useCityArrayStore } from '../stores/stores';
import SearchAppBar from '../components/SearchBar';

const WeatherForecasts = () => {
  const [weatherData, setWeatherData] = useState<IWeatherJSON>();
  const cityDatas: ICityAPI[] = useCityArrayStore();

  const city = cityDatas[0];

  useEffect(() => {
    getWeatherForecasts({ cityDatas: city })
      .then((data) => {
        console.log(data);
        setWeatherData(data as IWeatherJSON);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [cityDatas]);

  const cityArray = useCityArrayStore((state) => state);

  return (
    <AuthGuard>
      <PageContainer>
        <SearchAppBar cityArray={cityArray} />
        {weatherData && (
          <InfoCard
            city={weatherData.city}
            weather={weatherData.weather}
            weatherDescription={weatherData.weatherDescription}
            temperature={weatherData.temperature!}
          ></InfoCard>
        )}
      </PageContainer>
    </AuthGuard>
  );
};

export default WeatherForecasts;
