// Types
import { ListWithPaginationRes, SingleRes } from './common';

export interface Resource {
  id: number;
  name: string;
  year: number;
  color: string;
  pantoneValue: string;
}

export type SingleResourceRes = SingleRes<Resource>;

export type ResourceListRes = ListWithPaginationRes<Resource>;
