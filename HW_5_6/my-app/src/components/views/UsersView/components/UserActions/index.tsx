// Packages
import { memo, FC, useState, useCallback } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
// Components
import UserModal from '../UserModal';

const UserActions: FC = memo(() => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = useCallback((): void => {
    setIsModalOpen(prevState => !prevState);
  }, []);

  return (
    <>
      <Grid
        container
        justifyContent="flex-end"
      >
        <Grid item>
          <Button
            variant="contained"
            onClick={handleToggleModal}
            sx={{ textTransform: 'none' }}
          >
            <AddIcon sx={{ mr: '0.5rem' }} />
            Add User
          </Button>
        </Grid>
      </Grid>

      <UserModal
        isOpen={isModalOpen}
        onToggleModal={handleToggleModal}
      />
    </>
  );
});

UserActions.displayName = 'UserActions';

export default UserActions;
