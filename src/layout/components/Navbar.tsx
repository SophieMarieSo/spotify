import { Avatar, Badge, Box, styled } from '@mui/material';
import React from 'react';
import LoginButton from '../../common/components/LoginButton';
import { useGetCurrentUserProfile } from '../../hooks/useGetCurrentUserProfile';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export default function Navbar() {
  const { data: userProfile } = useGetCurrentUserProfile();
  return (
    <Box
      display='flex'
      justifyContent='flex-end'
      alignItems='center'
      height='64px'
    >
      {userProfile ? (
        <StyledBadge
          overlap='circular'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant='dot'
        >
          <Avatar
            src={userProfile.images[0]?.url}
            alt={userProfile.display_name}
          />
        </StyledBadge>
      ) : (
        <LoginButton />
      )}
    </Box>
  );
}
