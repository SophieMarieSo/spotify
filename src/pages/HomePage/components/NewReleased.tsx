import { Grid, Typography } from '@mui/material';
import React from 'react';
import useGetNewReleased from '../../../hooks/useGetNewReleased';
import Loading from '../../../common/components/Loading';
import ErrorMessage from '../../../common/components/ErrorMessage';
import Card from '../../../common/components/Card';

export default function NewReleased() {
  const { data, error, isLoading } = useGetNewReleased();

  if (isLoading)
    return (
      <div style={{ height: '50vh' }}>
        <Loading />
      </div>
    );
  if (error) return <ErrorMessage errorMessage={error.message} />;

  return (
    <div>
      <Typography variant='h1' paddingTop={8}>
        New Released Albums
      </Typography>
      {data && data.albums.items.length > 0 ? (
        <Grid container spacing={2}>
          {data.albums.items.map((album) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={album.id}>
              <Card
                name={album.name}
                artistName={album.artists
                  .map((artist) => artist.name)
                  .join(', ')}
                image={album.images[0].url}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant='h1'>No Data</Typography>
      )}
    </div>
  );
}
