// Packages
import { memo, FC } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const UserActions: FC = memo(() => {
  return (
    <Grid
      container
      justifyContent="flex-end"
    >
      <Grid item>
        <Button
          variant="contained"
          sx={{ textTransform: 'none' }}
        >
          <AddIcon sx={{ mr: '0.5rem' }} />
          Add User
        </Button>
      </Grid>
    </Grid>
  );
});

UserActions.displayName = 'UserActions';

export default UserActions;
