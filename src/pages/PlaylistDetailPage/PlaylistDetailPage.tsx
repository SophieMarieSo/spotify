import React from 'react';
import { useGetPlaylist } from '../../hooks/useGetPlaylist';
import { Navigate, useParams } from 'react-router';

export default function PlaylistDetailPage() {
  const { id } = useParams<{ id: string }>();
  if (id === undefined) return <Navigate to='/' />;
  const { data: playlist } = useGetPlaylist({ playlist_id: id });

  return <div>PlaylistDetailPage</div>;
}
