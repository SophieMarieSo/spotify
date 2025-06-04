import { useQuery } from '@tanstack/react-query';
import { getNewReleased } from '../apis/albumApi';

export default function useGetNewReleased() {
  return useQuery({
    queryKey: ['new-realeased'],
    queryFn: getNewReleased,
  });
}
