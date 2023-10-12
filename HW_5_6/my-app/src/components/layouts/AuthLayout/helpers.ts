// Configs
import routerConfig from '../../../configs/router';

export const authContent = {
  [routerConfig.links.signIn]: {
    message: "Don't have an account?",
    link: routerConfig.links.signUp,
    linkText: 'Sign Up',
  },
  [routerConfig.links.signUp]: {
    message: 'Already have an account?',
    link: routerConfig.links.signIn,
    linkText: 'Sign In',
  },
};
