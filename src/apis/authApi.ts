import axios from 'axios';
import { clientId, clientSecret } from '../configs/authConfig';
import { ClientCredentialTokenResponse } from '../models/auth';

const encodedBase64 = (data: string): string => {
  return Buffer.from(data).toString('base64');
};

export const getClientCredentialToken =
  async (): Promise<ClientCredentialTokenResponse> => {
    try {
      const body = new URLSearchParams({
        grant_type: 'client_credentials',
      });
      const resp = await axios.post(
        'https://accounts.spotify.com/api/token',
        body,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${encodedBase64(
              clientId + ':' + clientSecret
            )}`,
          },
        }
      );

      return resp.data;
    } catch (error) {
      throw new Error('Fail to fetch client credential token');
    }
  };
