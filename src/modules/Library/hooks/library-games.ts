import useSWR from 'swr';
import fetcher from '@/modules/Common/helpers/fetch';
import { Game } from '@/modules/Game/types/game';

type GameError = {
  code: string;
  message: string;
};

function useMyLibraryGames() {
  const { data, error, isLoading } = useSWR<Game[], GameError>(
    'https://8c15-190-119-190-162.ngrok.io/games',
    fetcher
  );

  return { games: data, error, isLoading };
}

export { useMyLibraryGames };
