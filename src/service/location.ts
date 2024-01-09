import { AxiosRequestConfig } from 'axios';
import { apiRequest } from './api';

export const fetchCities = async (input: string): Promise<ILocationRes> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/cities`,
    params: {
      minPopulation: '1000',
      namePrefix: input,
    },
    headers: {
      'X-RapidAPI-Key': '1d14ff1436msha4683cb6e94a0aep12299fjsn7a178e5082ba',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };
  return await apiRequest<ILocationRes>('geo', config);
};
