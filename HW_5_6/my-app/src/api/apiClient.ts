// Packages
import axios, { CreateAxiosDefaults } from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
// Configs
import appConfig from '../configs/app';

const apiConfig: CreateAxiosDefaults = {
  baseURL: appConfig.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

const apiClient = applyCaseMiddleware(axios.create(apiConfig));

export default apiClient;
