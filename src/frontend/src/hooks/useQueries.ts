import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactRequest } from '../backend';

export function useGetAllContactRequests() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactRequest[]>({
    queryKey: ['contactRequests'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContactRequests();
    },
    enabled: !!actor && !isFetching,
  });
}
