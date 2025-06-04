import { styled } from '@mui/material';
import React from 'react';

const PlayButtonContainer = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: 'none',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:focus': {
    outline: 'none',
  },
}));

export default function PlayButton() {
  return (
    <PlayButtonContainer>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M8 5v14l11-7z' fill='black' />
      </svg>
    </PlayButtonContainer>
  );
}
