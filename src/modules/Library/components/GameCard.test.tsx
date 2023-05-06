import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameCard from '@/modules/Library/components/GameCard';
import { Game } from '@/modules/Game/types/game';

test('loads and displays greeting', async () => {
  const game: Game = {
    id: '1',
    name: 'Legend of Korra',
    image: new URL('https://example.com'),
  };

  render(<GameCard game={game} />);

  expect(screen.getByRole('heading')).toHaveTextContent('Legend of Korra');
});
