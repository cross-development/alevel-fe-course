// Packages
import { FC, memo } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

interface Props {
  email: string;
  avatar: string;
  firstName: string;
  lastName: string;
  onShowUserDetails: () => void;
}

const UserCard: FC<Props> = memo(props => {
  const { email, avatar, firstName, lastName, onShowUserDetails } = props;

  return (
    <Card sx={{ width: '100%' }}>
      <CardMedia
        image={avatar}
        title="User's avatar"
        sx={{ height: 340 }}
      />

      <CardContent sx={{ textAlign: 'center' }}>
        <Typography
          gutterBottom
          variant="h5"
        >
          {firstName} {lastName}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {email}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          size="small"
          onClick={onShowUserDetails}
          sx={{ color: 'blue' }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
});

UserCard.displayName = 'UserCard';

export default UserCard;
