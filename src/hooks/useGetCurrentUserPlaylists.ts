import { useQuery } from '@tanstack/react-query';
import getCurrentUserPlaylists from '../apis/playlistApi';
import { GetCurrentUserPlaylistRequest } from '../models/playlist';

export const useGetCurrentUserPlaylists = ({
  limit,
  offset,
}: GetCurrentUserPlaylistRequest) => {
  return useQuery({
    queryKey: ['current-user-playlist'],
    queryFn: () => {
      return getCurrentUserPlaylists({ limit, offset });
    },
  });
};
