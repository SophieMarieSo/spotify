import { Button } from '@mui/material';
import React from 'react';
import getSpotifyAuthUrl from '../../utils/auth';

export default function LoginButton() {
  const login = () => {
    getSpotifyAuthUrl();
  };
  return (
    <Button variant='contained' color='secondary' size='large' onClick={login}>
      Log In
    </Button>
  );
}
