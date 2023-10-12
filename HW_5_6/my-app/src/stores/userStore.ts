// Packages
import { makeAutoObservable, runInAction } from 'mobx';
// API
import agent from '../api/modules';
// Types
import { ErrorRes, RequestParams } from '../types/common';
import { UserListRes, SingleUserRes, CreateUserBody, UpdateUserBody } from '../types/user';

class UserStore {
  users: UserListRes | null = null;
  userDetails: SingleUserRes | null = null;
  error: ErrorRes | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getUserList = async (params: RequestParams): Promise<void> => {
    this.isLoading = true;

    try {
      const users = await agent.Users.list(params);

      runInAction(() => {
        this.users = users;
      });
    } catch (error) {
      runInAction(() => {
        console.log('Error in the getUserList action', error);

        this.error = error as ErrorRes;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  getUserDetails = async (id: number): Promise<void> => {
    this.isLoading = true;

    try {
      const userDetails = await agent.Users.details(id);

      runInAction(() => {
        this.userDetails = userDetails;
      });
    } catch (error) {
      runInAction(() => {
        console.log('Error in the getUserDetails action', error);

        this.error = error as ErrorRes;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  crateUser = async (data: CreateUserBody): Promise<void> => {
    this.isLoading = true;

    try {
      await agent.Users.create(data);
    } catch (error) {
      runInAction(() => {
        console.log('Error in the crateUser action', error);

        this.error = error as ErrorRes;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  updateUser = async (id: number, data: UpdateUserBody): Promise<void> => {
    this.isLoading = true;

    try {
      await agent.Users.update(id, data);
    } catch (error) {
      runInAction(() => {
        console.log('Error in the updateUser action', error);

        this.error = error as ErrorRes;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
}

export default UserStore;
