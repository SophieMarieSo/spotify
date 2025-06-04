import React from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Box, Button, styled, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Layout = styled('div')({
  display: 'flex',
  padding: 8,
  alignItems: 'center',
  justifyContent: 'space-between',
});

const ContentBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 20,
});
export default function LibraryHead() {
  return (
    <Layout>
      <ContentBox>
        <BookmarkIcon />
        <Typography variant='h2' fontWeight={700}>
          Your Library
        </Typography>
      </ContentBox>
      <Button>
        <AddIcon />
      </Button>
    </Layout>
  );
}
