// Types
import { ListWithPaginationRes, RequestData, SingleRes } from './common';

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface CreateUserBody extends RequestData {
  name: string;
  job: string;
}

export interface CreateUserRes {
  id: string;
  name: string;
  job: string;
  createdAt: string;
}

export interface UpdateUserBody extends RequestData {
  name: string;
  job: string;
}

export interface UpdateUserRes {
  name: string;
  job: string;
  updatedAt: string;
}

export type SingleUserRes = SingleRes<User>;

export type UserListRes = ListWithPaginationRes<User>;
