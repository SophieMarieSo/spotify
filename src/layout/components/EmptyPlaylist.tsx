import { Button, Card, styled, Typography } from '@mui/material';
import React from 'react';

const Layout = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: 20,
  borderRadius: 8,
  marginTop: 8,
}));

const AddButton = styled(Button)({
  marginTop: 20,
  fontWeight: 700,
});

export default function EmptyPlaylist() {
  return (
    <Layout>
      <Typography variant='h2' fontWeight={700}>
        Create your first playlist
      </Typography>
      <Typography>It's easy, we'll help you</Typography>
      <AddButton variant='contained' color='secondary'>
        Create playlist
      </AddButton>
    </Layout>
  );
}
