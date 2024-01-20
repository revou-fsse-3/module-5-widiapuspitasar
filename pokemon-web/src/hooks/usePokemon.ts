import { getColorFromUrl } from '../utils/color';
import { getClient } from '../api';
import { POKEMON_API_POKEMON_URL } from '../PokeApi';
import { PokemonDetail } from '../interface';

interface UsePokemonProps {
  pokemonName: string | undefined;
}

const fetchPokemon = async (url: string) => {
  const result = await getClient.get<PokemonDetail>(url);
  return result.data;
};

const usePokemon = async ({ pokemonName }: UsePokemonProps) => {
  if (!pokemonName) return { pokemon: null, isLoading: false };

  const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`;
  try {
    const pokemon = await fetchPokemon(url);
    return { pokemon, isLoading: false };
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    return { pokemon: null, isLoading: false };
  }
};

export default usePokemon;
