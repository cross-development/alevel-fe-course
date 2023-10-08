// Packages
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// Stores
import { useStore } from '../../../../../stores/store';
// Configs
import routerConfig from '../../../../../configs/router';
// Types
import { SignInBody } from '../../../../../types/auth';

const SignInForm: FC = memo(() => {
  const { authStore } = useStore();

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: SignInBody) => {
    await authStore.signIn(data);

    navigate(routerConfig.links.home);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: '2rem', width: '25rem' }}
    >
      <Grid
        container
        rowGap="1rem"
        flexDirection="column"
      >
        <Grid
          item
          xs
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                type="email"
                size="small"
                label="Email"
                variant="outlined"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid
          item
          xs
        >
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                type="password"
                size="small"
                label="Password"
                variant="outlined"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid
          item
          xs
          sx={{ textAlign: 'center', pt: '1rem' }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{ p: '.375rem 3rem' }}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
});

SignInForm.displayName = 'SignInForm';

export default SignInForm;
