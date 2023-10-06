// Packages
import createTheme, { Theme } from '@mui/material/styles/createTheme';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
    },
    secondary: {
      main: '#7f8c8d',
    },
  },
});

export interface ThemeConfig {
  theme: Theme;
}

const themeConfig: ThemeConfig = {
  theme,
};

export default themeConfig;
