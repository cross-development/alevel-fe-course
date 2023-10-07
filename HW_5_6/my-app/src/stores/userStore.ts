// Packages
import { makeAutoObservable, runInAction } from 'mobx';
import { AxiosError } from 'axios';

class UserStore {
  users = null;
  userDetails = null;
  error: AxiosError | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getUserList = async (): Promise<void> => {
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

  getUserDetails = async (): Promise<void> => {
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

  crateUser = async (): Promise<void> => {
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

  updateUser = async (): Promise<void> => {
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

export default UserStore;
