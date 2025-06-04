import { styled } from '@mui/material';
import React from 'react';
import { ClipLoader } from 'react-spinners';

const Layout = styled('div')({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export default function Loading() {
  return (
    <Layout>
      <ClipLoader
        color='#1ED760'
        size={50}
        cssOverride={{
          borderWidth: 5,
        }}
      />
    </Layout>
  );
}
