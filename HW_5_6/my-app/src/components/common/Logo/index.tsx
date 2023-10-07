// Packages
import { FC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const Logo: FC = memo(() => (
  <Box>
    <Link
      to="/"
      component={RouterLink}
      sx={{ display: 'flex' }}
    >
      <img
        alt="logo"
        width="30"
        height="30"
        src="https://camo.githubusercontent.com/eb8b5f9caa4b4765b222e961729eadb775ac710b/68747470733a2f2f67617265766e612e6769746875622e696f2f6a732d73616d706c65732f696d616765732f612d6c6576656c2d69636f2e706e67"
      />
    </Link>
  </Box>
));

Logo.displayName = 'Logo';

export default Logo;
