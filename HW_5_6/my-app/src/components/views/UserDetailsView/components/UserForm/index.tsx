// Packages
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// Components
import { userFormFields, validationSchema } from './helpers';
// Stores
import { useStore } from '../../../../../stores/store';
// Configs
import routerConfig from '../../../../../configs/router';
// Types
import { UpdateUserBody } from '../../../../../types/user';

interface Props {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

const UserForm: FC<Props> = memo(({ id, email, firstName, lastName }) => {
  const { userStore } = useStore();

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(validationSchema),
    defaultValues: { email, firstName, lastName, job: '' },
  });

  const onSubmit = async (data: UpdateUserBody): Promise<void> => {
    await userStore.updateUser(id, data);

    enqueueSnackbar({ message: 'User has been updated successfully', variant: 'success' });

    navigate(routerConfig.links.users);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: '31.25rem' }}
    >
      <Grid
        container
        rowSpacing={{ xs: '2rem' }}
        columnSpacing={{ xs: '1rem' }}
      >
        {userFormFields.map(({ label, name, type, width }) => (
          <Grid
            key={name}
            item
            xs={width}
          >
            <Controller
              name={name}
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  type={type}
                  size="small"
                  label={label}
                  variant="outlined"
                  error={!!errors[name]}
                  helperText={errors[name]?.message}
                  {...field}
                />
              )}
            />
          </Grid>
        ))}

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
            Update
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
});

UserForm.displayName = 'UserForm';

export default UserForm;
