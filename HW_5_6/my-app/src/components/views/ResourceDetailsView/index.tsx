// Packages
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Components
import Loader from '../../common/Loader';
import ErrorData from '../../common/ErrorData';
// Stores
import { useStore } from '../../../stores/store';

const ResourceDetailsView: FC = observer(() => {
  const { id } = useParams();

  const {
    resourceStore: { getResourceDetails, isLoading, error, resourceDetails },
  } = useStore();

  useEffect(() => {
    getResourceDetails(Number(id));
  }, [getResourceDetails, id]);

  if (error) {
    return (
      <ErrorData
        code={error.code}
        message={error.message}
      />
    );
  }

  if (isLoading || !resourceDetails) {
    return <Loader />;
  }

  const { color, name, pantoneValue, year } = resourceDetails.data;

  return (
    <Box sx={{ p: '4rem 0', flexGrow: 1 }}>
      <Grid
        container
        columnGap={4}
        sx={{ justifyContent: 'center' }}
      >
        <Grid item>
          <Box sx={{ bgcolor: color, width: '18rem', height: '18rem' }} />
        </Grid>

        <Grid item>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', width: '100%', minWidth: '11.5rem' }}
          >
            <Box>
              <Typography
                gutterBottom
                variant="h4"
                textTransform="uppercase"
              >
                {name}
              </Typography>

              <Typography
                gutterBottom
                variant="body1"
                color="text.primary"
              >
                Color: {color}
              </Typography>

              <Typography
                gutterBottom
                variant="body1"
                color="text.primary"
              >
                Year: {year}
              </Typography>

              <Typography
                gutterBottom
                variant="body1"
                color="text.primary"
              >
                Pantone value: {pantoneValue}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
});

ResourceDetailsView.displayName = 'ResourceDetailsView';

export default ResourceDetailsView;
