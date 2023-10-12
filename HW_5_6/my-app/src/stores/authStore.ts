// Packages
import { makeAutoObservable, runInAction } from 'mobx';
// API
import agent from '../api/modules';
// Types
import { ErrorRes } from '../types/common';
import { SignInBody, SignUpBody } from '../types/auth';

class AuthStore {
  email = '';
  token = '';
  error: ErrorRes | null = null;
  isLoading = false;
  isLoggedIn = false;

  constructor() {
    makeAutoObservable(this);
  }

  signIn = async (data: SignInBody): Promise<void> => {
    this.isLoading = true;

    try {
      const { token } = await agent.Auth.signIn(data);

      runInAction(() => {
        this.email = data.email;
        this.token = token;
        this.isLoggedIn = true;
      });
    } catch (error) {
      runInAction(() => {
        console.log('Error in the signIn action', error);

        this.error = error as ErrorRes;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  signUp = async (data: SignUpBody): Promise<void> => {
    this.isLoading = true;

    try {
      const { token } = await agent.Auth.signUp(data);

      runInAction(() => {
        this.email = data.email;
        this.token = token;
        this.isLoggedIn = true;
      });
    } catch (error) {
      runInAction(() => {
        console.log('Error in the signUp action', error);

        this.error = error as ErrorRes;
      });
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
