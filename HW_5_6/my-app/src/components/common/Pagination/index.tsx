// Packages
import { ChangeEvent, FC, memo, useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import MuiPagination from '@mui/material/Pagination';

interface Props {
  totalPages: number;
}

const Pagination: FC<Props> = memo(({ totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1);

  const handleChangeCurrentPage = useCallback(
    (_: ChangeEvent<unknown>, page: number): void => {
      setCurrentPage(page);
      setSearchParams({ page: page.toString() });
    },
    [setSearchParams],
  );

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <MuiPagination
        shape="rounded"
        variant="outlined"
        count={totalPages}
        page={currentPage}
        onChange={handleChangeCurrentPage}
      />
    </Box>
  );
});

Pagination.displayName = 'Pagination';

export default Pagination;
