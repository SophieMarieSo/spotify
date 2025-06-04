import { styled, Typography } from '@mui/material';
import React from 'react';
import PlayButton from './PlayButton';
const CardContainer = styled('div')(({ theme }) => ({
  minWidth: '160px',
  width: '100%',
  height: '100%',
  padding: '12px',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    transition: 'opacity 0.3s ease-in-out',
  },
  '&:hover .overlay': {
    opacity: 1,
  },
}));

const AlbumImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '8px',
});

const EllipsisTypography = styled(Typography)({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis', // 말줄임 ...
});

const Overlay = styled('div')({
  position: 'absolute',
  bottom: '20px',
  right: '8px',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
});

interface CardProps {
  name: string | undefined;
  artistName?: string | undefined;
  image: string | undefined;
}

const Card = ({ name, artistName, image }: CardProps) => {
  return (
    <CardContainer>
      <div style={{ position: 'relative' }}>
        <AlbumImage src={image} alt={name} />
        <Overlay className='overlay'>
          <PlayButton />
        </Overlay>
      </div>

      <EllipsisTypography variant='h2'>{name || 'No name'}</EllipsisTypography>
      <EllipsisTypography color='text.secondary'>
        {artistName || 'No artist'}
      </EllipsisTypography>
    </CardContainer>
  );
};

export default Card;
