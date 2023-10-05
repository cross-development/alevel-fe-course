// Components
import HomePage from '../pages/HomePage';
import UsersPage from '../pages/UsersPage';
import ResourcePage from '../pages/ResourcesPage';
// Types
import { ReactPageEnhanced } from '../types/app';

interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: ReactPageEnhanced;
}

const routes: Route[] = [
  {
    key: 'home',
    title: 'Home',
    path: '/',
    enabled: true,
    component: HomePage,
  },
  {
    key: 'users',
    title: 'Users',
    path: '/users',
    enabled: true,
    component: UsersPage,
  },
  {
    key: 'resources',
    title: 'Resources',
    path: '/resources',
    enabled: true,
    component: ResourcePage,
  },
];

export interface RouterConfig {
  routes: Route[];
}

const routerConfig: RouterConfig = {
  routes,
};

export default routerConfig;
