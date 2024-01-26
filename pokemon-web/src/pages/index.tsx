
import {Grid, Container  } from '@mui/material';
import usePokemons from '../hooks/usePokemons';
import { PokemonList } from '../component';
import Text from '@/components/Text';
import Button from '@/components/Button'
import Navbar from '@/components/Navbar';

export default function Home() {
  const { pokemons, hasMorePokemon, fetchNextPage } = usePokemons();
    

    return(
    
<Container>
<Navbar />
  <Text className={"text-black font-bold text-4xl text-center m-2"}>{"WELCOME TO POKEMON WEB"}</Text>
  <PokemonList pokemons={pokemons}></PokemonList>
  {hasMorePokemon ? (
    <Grid container justifyContent="flex-end" style={{ marginTop: '1rem', marginBottom:'1rem' }}>
      <Button label="NEXT" onClick={fetchNextPage} className={"additional-classname"} />
    </Grid>
  ) : null}
</Container>

    )
}