import { useQuery } from '@tanstack/react-query';
import { getNewReleased } from '../apis/albumApi';
import useClientCredentialToken from './useClientCredentialToken';

export default function useGetNewReleased() {
  const clientCredentialToken = useClientCredentialToken();
  return useQuery({
    queryKey: ['new-released'],
    queryFn: () => {
      if (!clientCredentialToken) throw new Error('No token available');
      return getNewReleased(clientCredentialToken);
    },
  });
}
