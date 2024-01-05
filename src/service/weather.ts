import { AxiosRequestConfig } from 'axios';
import { apiRequest } from './api';

const WEATHER_API_KEY = 'fcf49f57500add427fbf083dbd6995bd';

export const fetchCurrentWeather = async (
  lat: number,
  lon: number,
): Promise<WeatherData> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`,
  };
  return await apiRequest<WeatherData>('weather', config);
};
