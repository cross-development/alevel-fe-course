// Packages
import { makeAutoObservable, runInAction } from 'mobx';
import { AxiosError } from 'axios';
// API
import agent from '../api/modules';
// Types
import { RequestParams } from '../types/common';
import { ResourceListRes, SingleResourceRes } from '../types/resource';

class ResourceStore {
  resources: ResourceListRes | null = null;
  resourceDetails: SingleResourceRes | null = null;
  error: AxiosError | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getResourceList = async (params: RequestParams): Promise<void> => {
    this.isLoading = true;

    try {
      const resources = await agent.Resources.list(params);

      runInAction(() => {
        this.resources = resources;
      });
    } catch (error) {
      console.log('Error in the getResourceList action', error);

      this.error = error as AxiosError;
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  getResourceDetails = async (id: number): Promise<void> => {
    this.isLoading = true;

    try {
      const resourceDetails = await agent.Resources.details(id);

      runInAction(() => {
        this.resourceDetails = resourceDetails;
      });
    } catch (error) {
      console.log('Error in the getResourceDetails action', error);

      this.error = error as AxiosError;
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
}

export default ResourceStore;
