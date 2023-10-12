// Packages
import { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
// Components
import Loader from '../../common/Loader';
import ErrorData from '../../common/ErrorData';
import Pagination from '../../common/Pagination';
import ResourceList from './components/ResourceList';
// Stores
import { useStore } from '../../../stores/store';

const ResourcesView: FC = observer(() => {
  const [searchParams] = useSearchParams();

  const {
    resourceStore: { getResourceList, isLoading, error, resources },
  } = useStore();

  useEffect(() => {
    getResourceList({ page: Number(searchParams.get('page')) || 1 });
  }, [getResourceList, searchParams]);

  if (error) {
    return (
      <ErrorData
        code={error.code}
        message={error.message}
      />
    );
  }

  if (isLoading || !resources) {
    return <Loader />;
  }

  return (
    <Box sx={{ p: '2rem 0', flexGrow: 1 }}>
      <Box sx={{ p: '2rem 0' }}>
        <ResourceList resources={resources.data} />
      </Box>

      <Pagination totalPages={resources.totalPages} />
    </Box>
  );
});

ResourcesView.displayName = 'ResourcesView';

export default ResourcesView;
