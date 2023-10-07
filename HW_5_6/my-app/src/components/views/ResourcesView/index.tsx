// Packages
import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Box from '@mui/material/Box';
// Components
import Loader from '../../common/Loader';
import ErrorData from '../../common/ErrorData';
import Pagination from '../../common/Pagination';
import ResourceList from './components/ResourceList';
// API
import agent from '../../../api/modules';
// Types
import { ErrorRes } from '../../../types/common';
import { ResourceListRes } from '../../../types/resource';

const ResourcesView: FC = memo(() => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorRes | null>(null);
  const [resources, setResources] = useState<ResourceListRes | null>(null);

  const [searchParams] = useSearchParams();

  const { enqueueSnackbar } = useSnackbar();

  const handleGetResourceList = useCallback(() => {
    setIsLoading(true);

    agent.Resources.list({ page: Number(searchParams.get('page')) || 1 })
      .then(setResources)
      .catch((error: ErrorRes) => {
        setError(error);

        enqueueSnackbar({ message: error?.message, variant: 'error' });
      })
      .finally(() => setIsLoading(false));
  }, [enqueueSnackbar, searchParams]);

  useEffect(() => {
    handleGetResourceList();
  }, [handleGetResourceList]);

  if (isLoading || !resources) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorData
        code={error.code}
        message={error.message}
      />
    );
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
