// Packages
import { makeAutoObservable, runInAction } from 'mobx';

class AuthStore {
  email = '';
  token = '';
  isLoading = false;
  isLoggedIn = false;

  constructor() {
    makeAutoObservable(this);
  }

  signIn = async (): Promise<void> => {
    this.isLoading = true;

    try {
    } catch (error) {
      console.log('error', error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  signUp = async (): Promise<void> => {
    this.isLoading = true;

    try {
    } catch (error) {
      console.log('error', error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  signOut = (): void => {
    this.isLoading = true;

    this.token = '';
    this.email = '';
    this.isLoggedIn = false;

    this.isLoading = false;
  };
}

export default AuthStore;
