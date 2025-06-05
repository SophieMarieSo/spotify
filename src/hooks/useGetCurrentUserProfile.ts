import { useQuery, UseQueryResult } from '@tanstack/react-query';
import getCurrentUserProfile from '../apis/userApi';
import { User } from '../models/user';

export const useGetCurrentUserProfile = (): UseQueryResult<User, Error> => {
  const accessToken = localStorage.getItem('access_token');
  return useQuery({
    queryKey: ['current-user-profile'],
    queryFn: getCurrentUserProfile,
    enabled: !!accessToken, // access_token이 localstorage에 있을 때만 함수 실행
  });
};
