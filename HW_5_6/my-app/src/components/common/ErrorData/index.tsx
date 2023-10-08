// Packages
import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  code?: number;
  message: string;
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
    {code && <Typography variant="h1">{code}</Typography>}

    <Typography variant="h3">{message}</Typography>
  </Box>
));

ErrorData.displayName = 'ErrorData';

export default ErrorData;
