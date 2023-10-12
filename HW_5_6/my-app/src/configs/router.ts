// Components
import HomePage from '../pages/HomePage';
import UsersPage from '../pages/UsersPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import ResourcePage from '../pages/ResourcesPage';
import UserDetailsPage from '../pages/UserDetailsPage';
import ResourceDetailsPage from '../pages/ResourceDetailsPage';
// Types
import { ReactPageEnhanced } from '../types/app';

type Link = typeof links;

const links = {
  home: '/',
  users: '/users',
  userDetails: '/users/:id',
  resources: '/resources',
  resourceDetails: '/resources/:id',
  signIn: '/sign-in',
  signUp: '/sign-up',
};

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
    key: 'user-details',
    title: 'User Details',
    path: links.userDetails,
    enabled: false,
    component: UserDetailsPage,
  },
  {
    key: 'resources',
    title: 'Resources',
    path: links.resources,
    enabled: true,
    component: ResourcePage,
  },
  {
    key: 'resource-details',
    title: 'Resource Details',
    path: links.resourceDetails,
    enabled: false,
    component: ResourceDetailsPage,
  },
  {
    key: 'sign-in',
    title: 'Sign In',
    path: links.signIn,
    enabled: false,
    component: SignInPage,
  },
  {
    key: 'sign-up',
    title: 'Sign Up',
    path: links.signUp,
    enabled: false,
    component: SignUpPage,
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
