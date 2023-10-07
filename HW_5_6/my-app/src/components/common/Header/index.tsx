// Packages
import { FC, ReactNode, memo } from 'react';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { SxProps, Theme } from '@mui/material/styles';
// Components
import Logo from '../Logo';

interface Props {
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

const Header: FC<Props> = memo(({ children, sx = {} }) => (
  <AppBar
    position="sticky"
    sx={{ backgroundColor: 'secondary.main', ...sx }}
  >
    <Container>
      <Toolbar disableGutters>
        <Grid
          container
          alignItems="center"
        >
          <Grid item>
            <Logo />
          </Grid>

          <Grid
            item
            xs
          >
            {children}
          </Grid>
        </Grid>
      </Toolbar>
    </Container>
  </AppBar>
));

Header.displayName = 'Header';

export default Header;
