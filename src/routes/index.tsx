import { useRoutes } from 'react-router-dom';
import * as PATHS from '../constants/path';
import Authentication from '../pages/Authentication';
import WeatherForecasts from '../pages/WeatherForecasts';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Authentication />,
    },
    {
      path: PATHS.WEATHER,
      element: <WeatherForecasts />,
    },
  ]);
}
