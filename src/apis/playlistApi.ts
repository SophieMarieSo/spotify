import {
  GetCurrentUserPlaylistRequest,
  GetCurrentUserPlaylistResponse,
} from '../models/playlist';
import api from '../utils/api';

export default async function getCurrentUserPlaylists({
  limit,
  offset,
}: GetCurrentUserPlaylistRequest): Promise<GetCurrentUserPlaylistResponse> {
  try {
    const resp = await api.get('/me/playlists', { params: { limit, offset } });
    return resp.data;
  } catch (error) {
    throw new Error('fail to fetch current user playlists');
  }
}
