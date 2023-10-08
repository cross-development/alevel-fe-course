// Packages
import { makeAutoObservable, runInAction } from 'mobx';
import { AxiosError } from 'axios';
import { enqueueSnackbar } from 'notistack';
// API
import agent from '../api/modules';
// Types
import { RequestParams } from '../types/common';
import { UserListRes, SingleUserRes, CreateUserBody, UpdateUserBody } from '../types/user';

class UserStore {
  users: UserListRes | null = null;
  userDetails: SingleUserRes | null = null;
  error: AxiosError | null = null;
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
      console.log('Error in the getUserList action', error);

      this.error = error as AxiosError;
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
      console.log('Error in the getUserDetails action', error);

      this.error = error as AxiosError;
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

      runInAction(() => {
        enqueueSnackbar({
          message: 'User has been created successfully',
          variant: 'success',
        });
      });
    } catch (error) {
      console.log('Error in the crateUser action', error);

      this.error = error as AxiosError;
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

      runInAction(() => {
        enqueueSnackbar({
          message: 'User has been updated successfully',
          variant: 'success',
        });
      });
    } catch (error) {
      console.log('Error in the updateUser action', error);

      this.error = error as AxiosError;
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
}

export default UserStore;
