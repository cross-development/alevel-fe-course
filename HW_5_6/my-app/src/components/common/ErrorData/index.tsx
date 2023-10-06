// Packages
import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Types
import { ErrorRes } from '../../../types/common';

interface Props {
  code?: ErrorRes['code'];
  message: ErrorRes['message'];
}

const ErrorData: FC<Props> = memo(({ message, code }) => (
  <Box
    sx={{
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    {code && <Typography variant="h2">{code}</Typography>}

    <Typography variant="h1">{message}</Typography>
  </Box>
));

ErrorData.displayName = 'ErrorData';

export default ErrorData;
