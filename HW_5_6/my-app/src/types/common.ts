// Packages
import { AxiosError } from 'axios';

export interface Support {
  url: string;
  text: string;
}

export interface SingleRes<T> {
  data: T;
  support: Support;
}

export interface ListWithPaginationRes<T> {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: T[];
  support: Support;
}

export interface RequestData {
  [key: string]: unknown;
}

export interface RequestParams extends RequestData {
  page: number;
}

export type ErrorRes = AxiosError;
