// Components
import HomePage from '../pages/HomePage';
import UsersPage from '../pages/UsersPage';
import ResourcePage from '../pages/ResourcesPage';
// Types
import { ReactPageEnhanced } from '../types/app';

type Link = typeof links;

const links = {
  home: '/',
  users: '/users',
  resources: '/resources',
} as const;

interface Route {
  key: string;
  title: string;
  path: Link[keyof Link];
  enabled: boolean;
  component: ReactPageEnhanced;
}

const routes: Route[] = [
  {
    key: 'home',
    title: 'Home',
    path: links.home,
    enabled: true,
    component: HomePage,
  },
  {
    key: 'users',
    title: 'Users',
    path: links.users,
    enabled: true,
    component: UsersPage,
  },
  {
    key: 'resources',
    title: 'Resources',
    path: links.resources,
    enabled: true,
    component: ResourcePage,
  },
];

export interface RouterConfig {
  routes: Route[];
  links: Link;
}

const routerConfig: RouterConfig = {
  routes,
  links,
};

export default routerConfig;
