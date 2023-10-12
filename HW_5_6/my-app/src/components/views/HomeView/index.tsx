// Packages
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Stores
import { useStore } from '../../../stores/store';

const HomeView: FC = observer(() => {
  const { authStore } = useStore();

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h1">Welcome Home! 👋</Typography>

      {authStore.isLoggedIn && (
        <Typography
          variant="h3"
          sx={{ mt: '2rem' }}
        >
          {authStore.email}
        </Typography>
      )}
    </Box>
  );
});

HomeView.displayName = 'HomeView';

export default HomeView;
