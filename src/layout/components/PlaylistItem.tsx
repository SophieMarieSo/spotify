import {
  Avatar,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import { PlaylistItemProps } from '../../models/playlist';

const PlayListItemContainer = styled(ListItemButton)(({ theme, selected }) => ({
  padding: '8px',
  alignItems: 'center',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));
const PlaylistAvatar = styled(Avatar)({
  width: '48px',
  height: '48px',
  borderRadius: '8px',
});
const PlaylistName = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));
const PlaylistItem = ({ image, name, artistName }: PlaylistItemProps) => {
  return (
    <PlayListItemContainer>
      <ListItemAvatar>
        <PlaylistAvatar
          src={
            image ||
            'data:image/png;base64,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'
          }
          alt={name}
        />
      </ListItemAvatar>
      <ListItemText
        primary={<PlaylistName>{name}</PlaylistName>}
        secondary={
          <Typography variant='body1' color='text.secondary'>
            {artistName}
          </Typography>
        }
      />
    </PlayListItemContainer>
  );
};

export default PlaylistItem;
