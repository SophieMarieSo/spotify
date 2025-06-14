import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { NavLink, Outlet } from 'react-router';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryHead from './components/LibraryHead';
import Library from './components/Library';
import Navbar from './components/Navbar';

const Layout = styled('div')({
  display: 'flex',
  height: '100vh',
  padding: 8,
});

const Sidebar = styled('div')(({ theme }) => ({
  width: '320px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  borderRadius: 8,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  width: '100%',
  padding: 16,
}));

const NavList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: 20,
  padding: 8,
  color: theme.palette.text.secondary,
  '&.hover': {
    color: theme.palette.text.primary,
  },
  '&.active': {
    color: theme.palette.text.primary,
  },
}));

export default function AppLayout() {
  return (
    <Layout>
      <Sidebar>
        <ContentBox sx={{ mb: 1 }}>
          <NavList>
            <StyledNavLink to='/'>
              <HomeIcon />
              <Typography variant='h2' fontWeight={700}>
                Home
              </Typography>
            </StyledNavLink>
            <StyledNavLink to='/search'>
              <SearchIcon />
              <Typography variant='h2' fontWeight={700}>
                Search
              </Typography>
            </StyledNavLink>
          </NavList>
        </ContentBox>
        <ContentBox style={{ height: '100%' }}>
          <LibraryHead />
          <Library />
        </ContentBox>
      </Sidebar>
      <ContentBox sx={{ ml: 1 }}>
        <Navbar />
        <Outlet />
      </ContentBox>
    </Layout>
  );
}
