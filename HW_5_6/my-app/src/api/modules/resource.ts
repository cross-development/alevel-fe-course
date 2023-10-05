// API
import apiClient from '../apiClient';
// Types
import { RequestParams } from '../../types/common';
import { ResourceListRes, SingleResourceRes } from '../../types/resource';

export const getResourceList = async (params: RequestParams): Promise<ResourceListRes> => {
  const response = await apiClient.get<ResourceListRes>('unknown', { params });

  return response.data;
};

export const getResourceDetails = async (id: number): Promise<SingleResourceRes> => {
  const response = await apiClient.get<SingleResourceRes>(`unknown/${id}`);

  return response.data;
};
