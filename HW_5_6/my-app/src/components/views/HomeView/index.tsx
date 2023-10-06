// Packages
import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomeView: FC = memo(() => (
  <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Typography variant="h1">Welcome Home! 👋</Typography>
  </Box>
));

HomeView.displayName = 'HomeView';

export default HomeView;
