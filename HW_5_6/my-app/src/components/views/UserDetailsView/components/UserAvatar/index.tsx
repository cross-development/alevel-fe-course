// Packages
import { FC, memo } from 'react';
import Paper from '@mui/material/Paper';

interface Props {
  avatar: string;
}

const UserAvatar: FC<Props> = memo(({ avatar }) => (
  <Paper
    elevation={3}
    sx={{ display: 'flex' }}
  >
    <img
      src={avatar}
      alt="User's avatar"
      style={{ height: '18rem', width: '18rem' }}
    />
  </Paper>
));

UserAvatar.displayName = 'UserAvatar';

export default UserAvatar;
