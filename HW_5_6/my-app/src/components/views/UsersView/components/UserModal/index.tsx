// Packages
import { FC, memo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// Components
import { userFormFields, validationSchema } from './helpers';
// Stores
import { useStore } from '../../../../../stores/store';
// Types
import { CreateUserBody } from '../../../../../types/user';

interface Props {
  isOpen: boolean;
  onToggleModal: () => void;
}

const UserModal: FC<Props> = memo(({ isOpen, onToggleModal }) => {
  const { userStore } = useStore();

  const { enqueueSnackbar } = useSnackbar();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(validationSchema),
    defaultValues: { email: '', firstName: '', lastName: '', job: '' },
  });

  const onSubmit = async (data: CreateUserBody): Promise<void> => {
    await userStore.crateUser(data);

    enqueueSnackbar({ message: 'User has been created successfully', variant: 'success' });
  };

  return (
    <Modal
      open={isOpen}
      onClose={onToggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          p: 4,
          width: 400,
          top: '50%',
          left: '50%',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
        }}
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
              Create
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
});

export default UserModal;
