// Packages
import { FC, memo } from 'react';
import Paper from '@mui/material/Paper';

interface Props {
  imageUrl: string;
}

const UserAvatar: FC<Props> = memo(({ imageUrl }) => (
  <Paper
    elevation={3}
    sx={{ display: 'flex' }}
  >
    <img
      src={imageUrl}
      alt="User's avatar"
      style={{ height: '100%', width: '100%' }}
    />
  </Paper>
));

UserAvatar.displayName = 'UserAvatar';

export default UserAvatar;
