// Packages
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
// Components
import ResourceCard from '../ResourceCard';
// Configs
import routerConfig from '../../../../../configs/router';
// Types
import { Resource } from '../../../../../types/resource';

interface Props {
  resources: Resource[];
}

const ResourceList: FC<Props> = memo(({ resources }) => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      rowSpacing={{ xs: '2rem' }}
      columnSpacing={{ xs: '2rem' }}
    >
      {resources.map(({ id, name, color, year, pantoneValue }) => (
        <Grid
          key={id}
          item
          md={4}
        >
          <ResourceCard
            name={name}
            year={year}
            color={color}
            pantoneValue={pantoneValue}
            onShowResourceDetails={() => navigate(`${routerConfig.links.resources}/${id}`)}
          />
        </Grid>
      ))}
    </Grid>
  );
});

ResourceList.displayName = 'ResourceList';

export default ResourceList;
