import React from 'react';
import EmptyPlaylist from './EmptyPlaylist';
import { useGetCurrentUserPlaylists } from '../../hooks/useGetCurrentUserPlaylists';
import Loading from '../../common/components/Loading';
import ErrorMessage from '../../common/components/ErrorMessage';
import { styled } from '@mui/material';
import Playlist from './Playlist';

const PlaylistContainer = styled('div')(({ theme }) => ({
  overflowY: 'auto',
  maxHeight: 'calc(100vh - 240px)',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    maxHeight: 'calc(100vh - 65px - 119px)',
  },
}));

export default function Library() {
  const { data, isLoading, error } = useGetCurrentUserPlaylists({
    limit: 10,
    offset: 0,
  });

  console.log(data?.items);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage errorMessage={error.message} />;
  }
  return (
    <div>
      {!data || data?.total === 0 ? (
        <EmptyPlaylist />
      ) : (
        <PlaylistContainer>
          <Playlist playlists={data.items} />
        </PlaylistContainer>
      )}
    </div>
  );
}
