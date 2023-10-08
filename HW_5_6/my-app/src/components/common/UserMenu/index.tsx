// Packages
import { FC, useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// Stores
import { useStore } from '../../../stores/store';
// Configs
import routerConfig from '../../../configs/router';

const UserMenu: FC = observer(() => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const { authStore } = useStore();

  const navigate = useNavigate();

  const handleOpenUserMenu = (e: MouseEvent<HTMLElement>): void => setAnchorElUser(e.currentTarget);

  const handleCloseUserMenu = (): void => setAnchorElUser(null);

  const handleNavigateToSignIn = (): void => navigate(routerConfig.links.signIn);

  const handleNavigateToSignUp = (): void => navigate(routerConfig.links.signUp);

  const handleSignOut = (): void => {
    authStore.signOut();

    navigate(routerConfig.links.home);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton
        onClick={handleOpenUserMenu}
        sx={{ p: 0 }}
      >
        <Avatar
          alt="User avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        />
      </IconButton>

      <Menu
        keepMounted
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={!!anchorElUser}
        onClose={handleCloseUserMenu}
        sx={{ mt: '2.875rem' }}
      >
        {authStore.isLoggedIn ? (
          <MenuItem
            key="sign-out"
            onClick={handleSignOut}
          >
            <Typography textAlign="center">Sign Out</Typography>
          </MenuItem>
        ) : (
          [
            <MenuItem
              key="sign-in"
              onClick={handleNavigateToSignIn}
            >
              <Typography textAlign="center">Sign In</Typography>
            </MenuItem>,
            <MenuItem
              key="sign-up"
              onClick={handleNavigateToSignUp}
            >
              <Typography textAlign="center">Sign Up</Typography>
            </MenuItem>,
          ]
        )}
      </Menu>
    </Box>
  );
});

UserMenu.displayName = 'UserMenu';

export default UserMenu;
