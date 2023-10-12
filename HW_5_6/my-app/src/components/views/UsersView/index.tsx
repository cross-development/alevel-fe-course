// Packages
import { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
// Components
import Loader from '../../common/Loader';
import ErrorData from '../../common/ErrorData';
import Pagination from '../../common/Pagination';
import UserList from './components/UserList';
import UserActions from './components/UserActions';
// Stores
import { useStore } from '../../../stores/store';

const UsersView: FC = observer(() => {
  const [searchParams] = useSearchParams();

  const {
    userStore: { getUserList, isLoading, error, users },
  } = useStore();

  useEffect(() => {
    getUserList({ page: Number(searchParams.get('page')) || 1 });
  }, [getUserList, searchParams]);

  if (error) {
    return (
      <ErrorData
        code={error.code}
        message={error.message}
      />
    );
  }

  if (isLoading || !users) {
    return <Loader />;
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
