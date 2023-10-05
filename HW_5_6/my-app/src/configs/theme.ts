// Packages
import createTheme, { Theme } from '@mui/material/styles/createTheme';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
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
