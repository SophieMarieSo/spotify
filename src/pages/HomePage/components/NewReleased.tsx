import { Typography } from '@mui/material';
import React from 'react';
import useGetNewReleased from '../../../hooks/useGetNewReleased';

export default function NewReleased() {
  const { data, error, isLoading } = useGetNewReleased();
  console.log(data);
  return (
    <div>
      <Typography variant='h1' paddingTop={8}>
        New Released Albums
      </Typography>
    </div>
  );
}
