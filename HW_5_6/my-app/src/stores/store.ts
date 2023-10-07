// Packages
import { createContext, useContext } from 'react';
// Stores
import AuthStore from './authStore';
import UserStore from './userStore';
import ResourceStore from './resourceStore';

interface Store {
  authStore: AuthStore;
  userStore: UserStore;
  resourceStore: ResourceStore;
}

export const store: Store = {
  authStore: new AuthStore(),
  userStore: new UserStore(),
  resourceStore: new ResourceStore(),
};

export const StoreContext = createContext(store);

export const useStore = (): Store => useContext(StoreContext);
