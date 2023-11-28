import { useEffect, useState } from 'react';
import InfoCard from '../components/InfoCard';
import PageContainer from '../components/PageContainer';
import AuthGuard from '../guards/AuthGuard';
import { IWeatherJSON } from '../types/weatherJSON';
import { getWeatherForecasts } from '../HTTP/weatherAPI';
import { useCityStore } from '../stores/stores';

const WeatherForecasts = () => {
  const [weatherData, setWeatherData] = useState<IWeatherJSON>();
  const cityDatas = useCityStore((state) => state.cityData);

  useEffect(() => {
    getWeatherForecasts({ cityDatas })
      .then((data) => {
        console.log(data);
        setWeatherData(data as IWeatherJSON);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [cityDatas]);

  return (
    <AuthGuard>
      <PageContainer>
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
