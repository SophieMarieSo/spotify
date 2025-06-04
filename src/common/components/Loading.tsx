import { styled } from '@mui/material';
import React from 'react';
import { ClipLoader } from 'react-spinners';

const Layout = styled('div')({
  width: '100%',
  height: '100%',
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
