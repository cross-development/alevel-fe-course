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

export interface RequestParams {
  page: number;
}

export interface ErrorRes {
  code?: number;
  message: string;
}
