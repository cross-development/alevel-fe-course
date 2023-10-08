// Packages
import axios, { AxiosError, AxiosResponse, CreateAxiosDefaults } from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
// Configs
import appConfig from '../configs/app';
// Types
import { RequestData } from '../types/common';

const apiConfig: CreateAxiosDefaults = {
  baseURL: appConfig.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const apiClient = applyCaseMiddleware(axios.create(apiConfig));

apiClient.interceptors.response.use(async response => {
  try {
    return response;
  } catch (error) {
    console.log('Error in the interceptors', error);

    return await Promise.reject(error as AxiosError);
  }
});

const resData = <T>(response: AxiosResponse<T>): T => response.data;

export const apiCaller = {
  get: <T>(url: string, params?: RequestData) => apiClient.get<T>(url, { params }).then(resData),
  post: <T>(url: string, body: RequestData) => apiClient.post<T>(url, body).then(resData),
  patch: <T>(url: string, body: RequestData) => apiClient.patch<T>(url, body).then(resData),
  put: <T>(url: string, body: RequestData) => apiClient.put<T>(url, body).then(resData),
  delete: <T>(url: string) => apiClient.delete<T>(url).then(resData),
};
