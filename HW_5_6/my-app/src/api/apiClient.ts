// Packages
import axios, { AxiosError, AxiosResponse, CreateAxiosDefaults } from 'axios';
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

export const apiClient = applyCaseMiddleware(axios.create(apiConfig));

apiClient.interceptors.response.use(
  async fulfilledResponse => {
    try {
      return fulfilledResponse;
    } catch (e) {
      const error = e as AxiosError;
      console.log('Error in the fulfilled response interceptor', error);

      return await Promise.reject({ code: error.response?.status, message: error.message });
    }
  },
  async rejectedResponse => {
    const error = rejectedResponse as AxiosError;
    console.log('Error in the rejected response interceptor', error);

    return await Promise.reject({ code: error.response?.status, message: error.message });
  },
);

const resData = <T>(response: AxiosResponse<T>): T => response.data;

export const apiCaller = {
  get: <T>(url: string, params?: unknown) => apiClient.get<T>(url, { params }).then(resData),
  post: <T>(url: string, body: unknown) => apiClient.post<T>(url, body).then(resData),
  patch: <T>(url: string, body: unknown) => apiClient.patch<T>(url, body).then(resData),
  put: <T>(url: string, body: unknown) => apiClient.put<T>(url, body).then(resData),
  delete: <T>(url: string) => apiClient.delete<T>(url).then(resData),
};
