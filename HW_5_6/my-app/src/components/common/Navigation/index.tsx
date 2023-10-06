// Packages
import { FC, memo, MouseEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// Configs
import routerConfig from '../../../configs/router';

const Navigation: FC = memo(() => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (e: MouseEvent<HTMLElement>): void => setAnchorElNav(e.currentTarget);

  const handleCloseNavMenu = (): void => setAnchorElNav(null);

  return (
    <>
      {/* Mobile navigation */}
      <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'flex-end' }}>
        <IconButton
          size="large"
          color="inherit"
          aria-haspopup="true"
          aria-controls="menu-appbar"
          aria-label="account of current user"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          keepMounted
          id="menu-appbar"
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {routerConfig.routes.map(
            ({ key, path, title, enabled }) =>
              enabled && (
                <Link
                  key={key}
                  to={path}
                  color="black"
                  underline="none"
                  component={NavLink}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{title}</Typography>
                  </MenuItem>
                </Link>
              ),
          )}
        </Menu>
      </Box>

      {/* Desktop navigation */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 5 }}>
        {routerConfig.routes.map(
          ({ key, path, title, enabled }) =>
            enabled && (
              <Link
                key={key}
                to={path}
                color="black"
                underline="none"
                component={NavLink}
                sx={{ fontSize: 'large', textTransform: 'uppercase' }}
              >
                {title}
              </Link>
            ),
        )}
      </Box>
    </>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
