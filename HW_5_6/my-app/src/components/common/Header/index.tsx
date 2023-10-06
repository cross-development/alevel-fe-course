// Packages
import { FC, memo } from 'react';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
// Components
import Logo from '../Logo';
import Navigation from '../Navigation';

const Header: FC = memo(() => (
  <AppBar
    position="sticky"
    sx={{ backgroundColor: 'secondary.main' }}
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
            <Navigation />
          </Grid>
        </Grid>
      </Toolbar>
    </Container>
  </AppBar>
));

Header.displayName = 'Header';

export default Header;
