// Packages
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// Components
import Loader from '../../common/Loader';
import ErrorData from '../../common/ErrorData';
import UserForm from './components/UserForm';
import UserAvatar from './components/UserAvatar';
// Stores
import { useStore } from '../../../stores/store';

const UserDetailsView: FC = observer(() => {
  const { id } = useParams();

  const {
    userStore: { getUserDetails, isLoading, error, userDetails },
  } = useStore();

  useEffect(() => {
    getUserDetails(Number(id));
  }, [getUserDetails, id]);

  if (error) {
    return (
      <ErrorData
        code={error.code}
        message={error.message}
      />
    );
  }

  if (isLoading || !userDetails) {
    return <Loader />;
  }

  const { avatar, ...userInfo } = userDetails.data;

  return (
    <Box sx={{ p: '4rem 0', flexGrow: 1 }}>
      <Grid
        container
        columnGap={6}
        justifyContent="center"
      >
        <Grid item>
          <UserAvatar avatar={avatar} />
        </Grid>

        <Grid item>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', width: '100%', minWidth: '11.5rem' }}
          >
            <UserForm {...userInfo} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
});

UserDetailsView.displayName = 'UserDetailsView';

export default UserDetailsView;
