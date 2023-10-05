// API
import apiClient from '../apiClient';
// Types
import { RequestParams } from '../../types/common';
import { UserListRes, SingleUserRes, CreateUserRes, UpdateUserRes } from '../../types/user';

export const getUserList = async (params: RequestParams): Promise<UserListRes> => {
  const response = await apiClient.get<UserListRes>('users', { params });

  return response.data;
};

export const getUserDetails = async (id: number): Promise<SingleUserRes> => {
  const response = await apiClient.get<SingleUserRes>(`users/${id}`);

  return response.data;
};

export const createUser = async (body: unknown): Promise<CreateUserRes> => {
  const response = await apiClient.post<CreateUserRes>('users', body);

  return response.data;
};

export const updateUser = async (id: number, body: unknown): Promise<UpdateUserRes> => {
  const response = await apiClient.patch<UpdateUserRes>(`users/${id}`, body);

  return response.data;
};
