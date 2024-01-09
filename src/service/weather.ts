import { AxiosRequestConfig } from 'axios';
import { apiRequest } from './api';

const WEATHER_API_KEY = 'fcf49f57500add427fbf083dbd6995bd';

export const fetchCurrentWeather = async <T>(
  lat: number,
  lon: number,
  type: 'weather' | 'forecast',
): Promise<T> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/${type}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
  };
  return await apiRequest<T>('weather', config);
};
