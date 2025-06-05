import axios from 'axios';
import { SPOTIFY_BASE_URL } from '../configs/commonConfig';
import { User } from '../models/user';

export default async function getCurrentUserProfile(): Promise<User> {
  try {
    const resp = await axios.get(`${SPOTIFY_BASE_URL}/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });

    return resp.data;
  } catch (error) {
    throw new Error('fail to fetch profile');
  }
}
