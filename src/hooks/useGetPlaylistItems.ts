import {
  GetPlaylistItemsRequest,
  GetPlaylistItemsResponse,
} from '../models/playlist';
import { getPlaylistItems } from '../apis/playlistApi';
import {
  InfiniteData,
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';

export const useGetPlaylistItems = (
  params: GetPlaylistItemsRequest
): UseInfiniteQueryResult<
  InfiniteData<GetPlaylistItemsResponse, Error>,
  Error
> => {
  return useInfiniteQuery({
    queryKey: ['playlist-items', params],
    queryFn: ({ pageParam = 0 }) => {
      return getPlaylistItems({ offset: pageParam, ...params });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        const url = new URL(lastPage.next);
        const nextOffset = url.searchParams.get('offset');
        return nextOffset ? parseInt(nextOffset) : undefined;
      }
      return undefined;
    },
  });
};
