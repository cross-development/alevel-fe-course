// Packages
import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Footer: FC = memo(() => (
  <Box sx={{ backgroundColor: 'secondary.main', p: '1rem 0' }}>
    <Container>
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        <Grid
          item
          xs
        >
          <Typography
            color="black"
            variant="h6"
          >
            A-LEVEL COURSE
          </Typography>
        </Grid>

        <Grid
          item
          xs
        >
          <Typography
            color="text.secondary"
            variant="subtitle1"
          >
            &copy; {`${new Date().getFullYear()} | React | Material UI | React Router`}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
));

Footer.displayName = 'Footer';

export default Footer;
