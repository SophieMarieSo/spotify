import {
  GetCurrentUserPlaylistRequest,
  GetCurrentUserPlaylistResponse,
  GetPlaylistItemsRequest,
  GetPlaylistRequest,
  Playlist,
} from '../models/playlist';
import api from '../utils/api';

export const getCurrentUserPlaylists = async ({
  limit,
  offset,
}: GetCurrentUserPlaylistRequest): Promise<GetCurrentUserPlaylistResponse> => {
  try {
    const resp = await api.get('/me/playlists', { params: { limit, offset } });
    return resp.data;
  } catch (error) {
    throw new Error('fail to fetch current user playlists');
  }
};

export const getPlaylist = async (
  params: GetPlaylistRequest
): Promise<Playlist> => {
  try {
    const resp = await api.get(`/playlists/${params.playlist_id}`, {
      params,
    });

    return resp.data;
  } catch (error) {
    throw new Error('fail to fetch playlist detail');
  }
};

export const getPlaylistItems = async (params: GetPlaylistItemsRequest) => {
  try {
    const resp = await api.get(`/playlists/${params.playlist_id}/tracks`, {
      params,
    });

    return resp.data;
  } catch (error) {
    throw new Error('fail to fetch playlist items');
  }
};
