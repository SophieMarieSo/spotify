import React, { useEffect } from 'react';
import { useGetPlaylist } from '../../hooks/useGetPlaylist';
import { Navigate, useParams } from 'react-router';
import {
  Box,
  Grid,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { useGetPlaylistItems } from '../../hooks/useGetPlaylistItems';
import DesktopPlaylistItems from './components/DesktopPlaylistItems';
import { PAGE_LIMIT } from '../../configs/commonConfig';
import { useInView } from 'react-intersection-observer';
import Loading from '../../common/components/Loading';

const PlaylistHeader = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  background: ' linear-gradient(transparent 0, rgba(0, 0, 0, .5) 100%)',
  padding: '16px',
});

const ImageGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}));

const AlbumImage = styled('img')(({ theme }) => ({
  borderRadius: '8px',
  height: '140px',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: '200px',
  },
}));

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
}));

const DefaultImage = styled(Box)({
  backgroundColor: '#282828',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  minWidth: '128px',
  height: '20vh',
  width: '20vh',
  boxShadow:
    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
});

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  background: theme.palette.background.paper,
  color: theme.palette.common.white,
  height: 'calc(100% - 64px)',
  borderRadius: '8px',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  msOverflowStyle: 'none', // IE and Edge
  scrollbarWidth: 'none', // Firefox
}));

export default function PlaylistDetailPage() {
  const [ref, inView] = useInView();
  const { id } = useParams<{ id: string }>();
  if (id === undefined) return <Navigate to='/' />;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: playlist } = useGetPlaylist({ playlist_id: id });
  const {
    data: playlistItems,
    isLoading: isPlaylistItemsLoading,
    error: isPlaylistItemsError,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useGetPlaylistItems({ playlist_id: id, limit: PAGE_LIMIT });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <StyledTableContainer>
      <PlaylistHeader container spacing={7}>
        <ImageGrid item sm={12} md={2}>
          {playlist?.images ? (
            <AlbumImage
              src={playlist?.images[0].url}
              alt='playlist_cover.jpg'
            />
          ) : (
            <DefaultImage>
              <MusicNoteIcon fontSize='large' />
            </DefaultImage>
          )}
        </ImageGrid>
        <Grid item sm={12} md={10}>
          <Box>
            <ResponsiveTypography variant='h1' color='white'>
              {playlist?.name}
            </ResponsiveTypography>

            <Box display='flex' alignItems='center'>
              <img
                src='https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5'
                width='20px'
                alt={playlist?.name}
              />
              <Typography
                variant='subtitle1'
                color='white'
                ml={1}
                fontWeight={700}
              >
                {playlist?.owner?.display_name
                  ? playlist?.owner.display_name
                  : 'unknown'}
              </Typography>
              <Typography variant='subtitle1' color='white'>
                • {playlist?.tracks?.total} songs
              </Typography>
            </Box>
          </Box>
        </Grid>
      </PlaylistHeader>
      {playlist?.tracks?.total === 0 ? (
        <Typography>Search</Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Album</TableCell>
              <TableCell>Date added</TableCell>
              <TableCell>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playlistItems?.pages.map((page, pageIdx) =>
              page.items.map((item, idx) => {
                return (
                  <DesktopPlaylistItems
                    key={pageIdx * PAGE_LIMIT + (idx + 1)}
                    item={item}
                    index={pageIdx * PAGE_LIMIT + (idx + 1)}
                  />
                );
              })
            )}
            <div ref={ref}>{isFetchingNextPage && <Loading />}</div>
          </TableBody>
        </Table>
      )}
    </StyledTableContainer>
  );
}
