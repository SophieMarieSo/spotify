import axios from 'axios';
import { SPOTIFY_BASE_URL } from '../configs/commonConfig';
import { GetNewReleasedResponse } from '../models/album';

export const getNewReleased = async (
  clientCredentialToken: string
): Promise<GetNewReleasedResponse> => {
  try {
    const resp = await axios.get(
      `${SPOTIFY_BASE_URL}/browse/new-releases?limit=6`,
      {
        headers: {
          Authorization: `Bearer ${clientCredentialToken}`,
        },
      }
    );

    return resp.data;
  } catch (error) {
    throw new Error('Fail to fetch new released');
  }
};
