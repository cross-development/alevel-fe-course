// Packages
import createTheme, { Theme } from '@mui/material/styles/createTheme';

const theme = createTheme({
  palette: {
    primary: {
      main: '#636e72',
    },
    secondary: {
      main: '#b2bec3',
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
