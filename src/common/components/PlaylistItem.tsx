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
  backgroundColor: selected ? theme.palette.action.active : '',
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
const PlaylistItem = ({
  image,
  name,
  artistName,
  id,
  handleClick,
  selected,
}: PlaylistItemProps) => {
  return (
    <PlayListItemContainer
      onClick={() => handleClick(id)}
      selected={selected || false}
    >
      <ListItemAvatar>
        <PlaylistAvatar
          src={
            image ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4Vx0-xPaQUEJHeZC5raF3DPf4PT3Wb6cSQ&s'
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
