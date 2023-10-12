// Packages
import { makeAutoObservable, runInAction } from 'mobx';
// API
import agent from '../api/modules';
// Types
import { ErrorRes, RequestParams } from '../types/common';
import { ResourceListRes, SingleResourceRes } from '../types/resource';

class ResourceStore {
  resources: ResourceListRes | null = null;
  resourceDetails: SingleResourceRes | null = null;
  error: ErrorRes | null = null;
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
      runInAction(() => {
        console.log('Error in the getResourceList action', error);

        this.error = error as ErrorRes;
      });
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
      runInAction(() => {
        console.log('Error in the getResourceDetails action', error);

        this.error = error as ErrorRes;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
}

export default ResourceStore;
