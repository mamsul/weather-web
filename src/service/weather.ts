import { apiRequest } from './api';

const WEATHER_API_KEY = 'fcf49f57500add427fbf083dbd6995bd';

type fetchWeatherDataProps = {
  lat: number;
  lon: number;
};

export const fetchWeatherData = ({ lat, lon }: fetchWeatherDataProps) => {
  const url = `lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

  async function todayWeather() {
    return await apiRequest<IWeatherData>('weather', {
      url: `/weather?${url}`,
    });
  }

  async function forecast() {
    return await apiRequest<IForecastRes>('weather', {
      url: `/forecast?${url}`,
    });
  }

  return { todayWeather, forecast };
};
