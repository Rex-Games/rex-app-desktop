import { Col, Container, Grid, Loading, Spacer, Text } from '@nextui-org/react';
import { useMyLibraryGames } from '@/modules/Library/hooks/library-games';
import GameCard from '@/modules/Library/components/GameCard';

function Library(): JSX.Element {
  const { games, error, isLoading } = useMyLibraryGames();

  if (isLoading) {
    return (
      <Container display="grid" justify="center">
        <Spacer y={2} />
        <Loading />
      </Container>
    );
  }

  return (
    <Container>
      <Col>
        <Text>Library</Text>
        <Grid.Container gap={2}>
          {games?.map((game) => (
            <Grid key={game.id} xs={4}>
              <GameCard game={game} />
            </Grid>
          ))}
        </Grid.Container>
      </Col>
    </Container>
  );
}

export default Library;
