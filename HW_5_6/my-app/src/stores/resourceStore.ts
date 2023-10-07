// Packages
import { makeAutoObservable, runInAction } from 'mobx';
import { AxiosError } from 'axios';

class ResourceStore {
  resources = null;
  resourceDetails = null;
  error: AxiosError | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getResourceList = async (): Promise<void> => {
    this.isLoading = true;

    try {
    } catch (error) {
      console.log('error', error);

      this.error = error as AxiosError;
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  getResourceDetails = async (): Promise<void> => {
    this.isLoading = true;

    try {
    } catch (error) {
      console.log('error', error);

      this.error = error as AxiosError;
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
}

export default ResourceStore;
