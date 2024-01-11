import axios, { AxiosRequestConfig } from 'axios';

const createAPI = (baseURL: string) => {
  return axios.create({
    method: 'GET',
    baseURL,
    timeout: 5000,
  });
};

const weatherAPI = createAPI('https://api.openweathermap.org/data/2.5');
const geoAPI = createAPI('https://wft-geo-db.p.rapidapi.com/v1/geo');

const handleRequest = async <T>(
  apiInstance: any,
  config: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response = await apiInstance(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const apiRequest = async <T>(
  api: 'weather' | 'geo',
  config: AxiosRequestConfig,
): Promise<T> => {
  try {
    switch (api) {
      case 'weather':
        return await handleRequest<T>(weatherAPI, config);
      case 'geo':
        return await handleRequest<T>(geoAPI, config);
      default:
        throw new Error('Invalid API type');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
