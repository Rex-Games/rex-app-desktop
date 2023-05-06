import { Card, Col, Text } from '@nextui-org/react';
import { Game } from '@/modules/Game/types/game';

type GameCardProps = {
  game: Game;
};

function GameCard({ game }: GameCardProps): JSX.Element {
  return (
    <Card>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text h4 color="white">
            {game.name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src={game.image.toString()}
        objectFit="cover"
        width={400}
        height={200}
        alt={`game: ${game.name}`}
      />
    </Card>
  );
}

export default GameCard;
