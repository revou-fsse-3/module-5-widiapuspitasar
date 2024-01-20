
import {Grid, Button, Container  } from '@mui/material';
import usePokemons from '../hooks/usePokemons';
import { PokemonList, Navbar } from '../component';

export default function Home() {
  const { pokemons, hasMorePokemon, fetchNextPage } = usePokemons();
    

    return(
    
<Container>
<Navbar />
  <h1 className="text-black font-bold text-4xl text-center m-2">WELCOME TO POKEMON WEB</h1>
  <PokemonList pokemons={pokemons}></PokemonList>
  {hasMorePokemon ? (
    <Grid container justifyContent="flex-end" style={{ marginTop: '1rem', marginBottom:'1rem' }}>
      <Button
        onClick={fetchNextPage}
        sx={{
          display: 'inline-block',
          margin: '1rem 0 2rem',
          backgroundColor: 'orange',
          color: '',
          '&:hover': {
              backgroundColor: 'yellow',
              color: 'black',
          },
      }}
      >
        NEXT
      </Button>
    </Grid>
  ) : null}
</Container>

    )
}