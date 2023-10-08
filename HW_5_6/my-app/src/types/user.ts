// Types
import { ListWithPaginationRes, SingleRes } from './common';

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface CreateUserBody {
  email: string;
  firstName: string;
  lastName: string;
  job: string;
}

export interface CreateUserRes {
  id: string;
  name: string;
  job: string;
  createdAt: string;
}

export interface UpdateUserBody {
  email?: string;
  firstName: string;
  lastName: string;
  job?: string;
}

export interface UpdateUserRes {
  name: string;
  job: string;
  updatedAt: string;
}

export type SingleUserRes = SingleRes<User>;

export type UserListRes = ListWithPaginationRes<User>;
