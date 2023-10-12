// Packages
import { SnackbarProviderProps } from 'notistack';

const provider: SnackbarProviderProps = {
  maxSnack: 3,
  autoHideDuration: 2000,
  preventDuplicate: true,
  anchorOrigin: {
    horizontal: 'center',
    vertical: 'top',
  },
};

export interface SnackbarConfig {
  provider: SnackbarProviderProps;
}

const snackbarConfig: SnackbarConfig = {
  provider,
};

export default snackbarConfig;
