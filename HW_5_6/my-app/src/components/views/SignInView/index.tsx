// Packages
import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Components
import SignInForm from './components/SignInForm';

const SignInView: FC = memo(() => (
  <Box
    sx={{
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <Typography variant="h2">Sign In</Typography>

    <SignInForm />
  </Box>
));

SignInView.displayName = 'SignInView';

export default SignInView;
