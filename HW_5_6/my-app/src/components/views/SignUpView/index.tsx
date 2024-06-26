// Packages
import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Components
import SignUpForm from './components/SignUpForm';

const SignUpView: FC = memo(() => (
  <Box
    sx={{
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <Typography variant="h1">Sign Up</Typography>

    <SignUpForm />
  </Box>
));

SignUpView.displayName = 'SignUpView';

export default SignUpView;
