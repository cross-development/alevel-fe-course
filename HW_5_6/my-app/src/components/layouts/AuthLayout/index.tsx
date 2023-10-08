// Packages
import { FC, ReactNode, memo } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// Components
import Header from '../../common/Header';
import { authContent } from './helpers';
// Types
import { ReactPageEnhanced } from '../../../types/app';

interface Props {
  children: ReactNode;
}

const AuthLayoutComponent: FC<Props> = memo(({ children }) => {
  const { pathname } = useLocation();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header withUserMenu={false}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Typography sx={{ mr: '1rem', color: 'text.primary' }}>
            {authContent[pathname]?.message}
          </Typography>

          <Link
            to={authContent[pathname]?.link}
            component={RouterLink}
            sx={{ color: '#4834d4', textDecoration: 'none' }}
          >
            {authContent[pathname]?.linkText}
          </Link>
        </Box>
      </Header>

      <Container sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </Container>
    </Box>
  );
});

AuthLayoutComponent.displayName = 'AuthLayoutComponent';

const AuthLayout = (Page: ReactPageEnhanced): JSX.Element => (
  <AuthLayoutComponent>{<Page />}</AuthLayoutComponent>
);

export default AuthLayout;
