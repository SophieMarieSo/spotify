import React, { useEffect } from 'react';
import EmptyPlaylist from './EmptyPlaylist';
import { useGetCurrentUserPlaylists } from '../../hooks/useGetCurrentUserPlaylists';
import Loading from '../../common/components/Loading';
import ErrorMessage from '../../common/components/ErrorMessage';
import { styled } from '@mui/material';
import Playlist from './Playlist';
import { useGetCurrentUserProfile } from '../../hooks/useGetCurrentUserProfile';
import { useInView } from 'react-intersection-observer';

const PlaylistContainer = styled('div')(({ theme }) => ({
  overflowY: 'auto',
  maxHeight: 'calc(100vh - 240px)',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    maxHeight: 'calc(100vh - 65px - 119px)',
  },
  '&::-webkit-scrollbar': {
    display: 'none',
    msOverflowStyle: 'none', // IE and Edge
    scrollbarWidth: 'none', // Firefox
  },
}));

export default function Library() {
  const { ref, inView } = useInView();
  const {
    data,
    isLoading,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetCurrentUserPlaylists({
    limit: 10,
    offset: 0,
  });

  const { data: user } = useGetCurrentUserProfile();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  });

  if (!user) return <EmptyPlaylist />;

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage errorMessage={error.message} />;
  }
  return (
    <div>
      {!data || data?.pages[0].total === 0 ? (
        <EmptyPlaylist />
      ) : (
        <PlaylistContainer>
          {data?.pages.map((page, idx) => (
            <Playlist key={idx} playlists={page.items} />
          ))}
          <div ref={ref}>{isFetchingNextPage && <Loading />}</div>
        </PlaylistContainer>
      )}
    </div>
  );
}
