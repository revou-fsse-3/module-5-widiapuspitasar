import { Container, Grid, Box, Button } from '@mui/material';
import { AvatarPokemon, BasicInfoPokemon, Navbar, StatusPokemon } from '../../component';
import Link from 'next/link';
import usePokemon from '../../hooks/usePokemon';
import { PokemonDetail } from '@/interface';

interface DetailPokemonProps {
  pokemonName: string;
  pokemon: PokemonDetail;
  isLoading: boolean;
}

const DetailPokemon = ({ pokemonName, pokemon, isLoading }: DetailPokemonProps) => {
  return (
    <Container>
      <Navbar />
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          {isLoading ? (
            <Box>Loading....</Box>
          ) : pokemon ? (
            <>
              <Box>
                <AvatarPokemon pokemon={pokemon} />
                <BasicInfoPokemon pokemon={pokemon} />
                <StatusPokemon pokemon={pokemon} />
                <Box sx={{ textAlign: 'center' }}>
                  <Link href="/">
                    <Button
                      variant="contained"
                      sx={{
                        display: 'inline-block',
                        margin: '1rem 0 2rem',
                        backgroundColor: 'orange',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'orange',
                          color: 'white',
                        },
                      }}
                    >
                      Go To Pokemon List
                    </Button>
                  </Link>
                </Box>
              </Box>
            </>
          ) : (
            <Box>Pokemon not Found</Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export async function getServerSideProps({ params }: { params: { pokemonName: string } }) {
  const pokemonName = params?.pokemonName;
  const { pokemon, isLoading } = await usePokemon({ pokemonName });

  return {
    props: {
      pokemonName,
      pokemon,
      isLoading,
    },
  };
}

export default DetailPokemon;