import React from 'react';
import { SimplifiedPlaylist } from '../../models/playlist';
import PlaylistItem from '../../common/components/PlaylistItem';

interface PlaylistProps {
  playlists: SimplifiedPlaylist[];
}
export default function Playlist({ playlists }: PlaylistProps) {
  return (
    <div>
      {playlists.map((item) => (
        <PlaylistItem
          key={item.id}
          name={item.name || ''}
          image={(item.images && item.images[0]?.url) || null}
          artistName={'Playlist • ' + item.owner?.display_name}
        />
      ))}
    </div>
  );
}
