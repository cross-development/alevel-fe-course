// Packages
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
// Components
import App from './App';
// Stores
import { StoreContext, store } from './stores/store';
// Configs
import themeConfig from './configs/theme';
import snackbarConfig from './configs/snackbar';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <CssBaseline />

    <StoreContext.Provider value={store}>
      <ThemeProvider theme={themeConfig.theme}>
        <SnackbarProvider {...snackbarConfig.provider}>
          <App />
        </SnackbarProvider>
      </ThemeProvider>
    </StoreContext.Provider>
  </BrowserRouter>,
);
