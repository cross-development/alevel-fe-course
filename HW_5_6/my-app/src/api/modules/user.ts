// API
import { apiCaller } from '../apiClient';
// Types
import { RequestParams } from '../../types/common';
import {
  UserListRes,
  SingleUserRes,
  CreateUserRes,
  UpdateUserRes,
  CreateUserBody,
  UpdateUserBody,
} from '../../types/user';

const Users = {
  list: (params: RequestParams) => apiCaller.get<UserListRes>('/users', params),
  details: (id: number) => apiCaller.get<SingleUserRes>(`/users/${id}`),
  create: (body: CreateUserBody) => apiCaller.post<CreateUserRes>('/users', body),
  update: (id: number, body: UpdateUserBody) => apiCaller.put<UpdateUserRes>(`/users/${id}`, body),
};

export default Users;
