// Packages
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
// Components
import UserCard from '../UserCard';
// Configs
import routerConfig from '../../../../../configs/router';
// Types
import { User } from '../../../../../types/user';

interface Props {
  users: User[];
}

const UserList: FC<Props> = memo(({ users }) => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      rowSpacing={{ xs: '2rem' }}
      columnSpacing={{ xs: '2rem' }}
    >
      {users.map(({ id, avatar, email, firstName, lastName }) => (
        <Grid
          key={id}
          item
          md={4}
        >
          <UserCard
            avatar={avatar}
            email={email}
            firstName={firstName}
            lastName={lastName}
            onShowUserDetails={() => navigate(`${routerConfig.links.users}/${id}`)}
          />
        </Grid>
      ))}
    </Grid>
  );
});

UserList.displayName = 'UserList';

export default UserList;
