// API
import { apiCaller } from '../apiClient';
// Types
import { RequestParams } from '../../types/common';
import { ResourceListRes, SingleResourceRes } from '../../types/resource';

const Resources = {
  list: (params: RequestParams) => apiCaller.get<ResourceListRes>('/unknown', params),
  details: (id: number) => apiCaller.get<SingleResourceRes>(`/unknown/${id}`),
};

export default Resources;
