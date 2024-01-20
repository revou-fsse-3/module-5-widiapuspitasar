import { PokemonDetail } from '../interface';
import { useEffect, useState } from "react";
import { getClient } from "../api";
import { POKEMON_API_POKEMON_URL } from "../PokeApi";
import { getColorFromUrl } from '../utils/color';

interface UsePokemonProps {
  pokemonName: string | undefined;
}

const usePokemon = ({ pokemonName }: UsePokemonProps) => {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getPokemonColor = async (pokemon: PokemonDetail | null) => {
    if (pokemon?.sprites?.other['official-artwork']?.front_default) {
      const color = await getColorFromUrl(
        pokemon.sprites.other['official-artwork'].front_default
      );
      if (color) setPokemon((prevPokemon) => ({ ...(prevPokemon as PokemonDetail), color }));
    }
  };

  const fetchPokemon = async () => {
    if (pokemonName) {
      setIsLoading(true);
      try {
        const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`;
        const result = await getClient.get<PokemonDetail>(url);

        if (result?.data) {
          setPokemon(result.data);
          getPokemonColor(result.data);
        }
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (pokemonName) {
      fetchPokemon();
    }
  }, [pokemonName]);

  return {
    pokemon,
    isLoading,
  };
};

export default usePokemon;
