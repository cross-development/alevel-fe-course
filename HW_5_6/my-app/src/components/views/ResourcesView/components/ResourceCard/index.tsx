// Packages
import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

interface Props {
  name: string;
  year: number;
  color: string;
  pantoneValue: string;
  onShowResourceDetails: () => void;
}

const ResourceCard: FC<Props> = memo(props => {
  const { color, name, pantoneValue, year, onShowResourceDetails } = props;

  return (
    <Card sx={{ width: '100%', display: 'flex', gap: 3 }}>
      <Box
        sx={{
          bgcolor: color,
          width: '100%',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography>{color}</Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', minWidth: '11.5rem' }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
          >
            {name}
          </Typography>

          <Typography
            variant="body2"
            color="text.primary"
          >
            Year: {year}
          </Typography>

          <Typography
            variant="body2"
            color="text.primary"
          >
            Pantone value: {pantoneValue}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button
            size="small"
            onClick={onShowResourceDetails}
            sx={{ color: 'blue' }}
          >
            View
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
});

ResourceCard.displayName = 'ResourceCard';

export default ResourceCard;
