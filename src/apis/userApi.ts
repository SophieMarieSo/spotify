import { User } from '../models/user';
import api from '../utils/api';

export default async function getCurrentUserProfile(): Promise<User> {
  try {
    const resp = await api.get('/me');

    return resp.data;
  } catch (error) {
    throw new Error('fail to fetch profile');
  }
}
