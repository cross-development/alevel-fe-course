// Packages
import { FC, ReactNode, memo } from 'react';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { SxProps, Theme } from '@mui/material/styles';
// Components
import Logo from '../Logo';
import UserMenu from '../UserMenu';

interface Props {
  sx?: SxProps<Theme>;
  children?: ReactNode;
  withUserMenu?: boolean;
}

const Header: FC<Props> = memo(({ children, withUserMenu = true, sx = {} }) => (
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

          {withUserMenu && (
            <Grid item>
              <UserMenu />
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </Container>
  </AppBar>
));

Header.displayName = 'Header';

export default Header;
