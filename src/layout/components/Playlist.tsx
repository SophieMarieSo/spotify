import React, { useState } from 'react';
import { SimplifiedPlaylist } from '../../models/playlist';
import PlaylistItem from '../../common/components/PlaylistItem';
import { useNavigate } from 'react-router';

interface PlaylistProps {
  playlists: SimplifiedPlaylist[];
}
export default function Playlist({ playlists }: PlaylistProps) {
  const [selected, setSelected] = useState<string>('');
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    setSelected(id);
    navigate(`/playlist/${id}`);
  };

  return (
    <div>
      {playlists.map((item) => (
        <PlaylistItem
          key={item.id}
          id={item.id || ''}
          name={item.name || ''}
          image={(item.images && item.images[0]?.url) || null}
          artistName={'Playlist • ' + item.owner?.display_name}
          handleClick={handleClick}
          selected={selected === item.id}
        />
      ))}
    </div>
  );
}
