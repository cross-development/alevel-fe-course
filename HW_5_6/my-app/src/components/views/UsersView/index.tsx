// Packages
import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Box from '@mui/material/Box';
// Components
import Loader from '../../common/Loader';
import ErrorData from '../../common/ErrorData';
import Pagination from '../../common/Pagination';
import UserList from './components/UserList';
import UserActions from './components/UserActions';
// API
import { userApi } from '../../../api/modules';
// Types
import { ErrorRes } from '../../../types/common';
import { UserListRes } from '../../../types/user';

const UsersView: FC = memo(() => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorRes | null>(null);
  const [users, setUsers] = useState<UserListRes | null>(null);

  const [searchParams] = useSearchParams();

  const { enqueueSnackbar } = useSnackbar();

  const handleGetUserList = useCallback(() => {
    setIsLoading(true);

    userApi
      .getUserList({ page: Number(searchParams.get('page')) || 1 })
      .then(setUsers)
      .catch((error: ErrorRes) => {
        setError(error);

        enqueueSnackbar({ message: error?.message, variant: 'error' });
      })
      .finally(() => setIsLoading(false));
  }, [enqueueSnackbar, searchParams]);

  useEffect(() => {
    handleGetUserList();
  }, [handleGetUserList]);

  if (isLoading || !users) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorData
        code={error.code}
        message={error.message}
      />
    );
  }

  return (
    <Box sx={{ p: '2rem 0', flexGrow: 1 }}>
      <UserActions />

      <Box sx={{ p: '2rem 0' }}>
        <UserList users={users.data} />
      </Box>

      <Pagination totalPages={users.totalPages} />
    </Box>
  );
});

UsersView.displayName = 'UsersView';

export default UsersView;
