import React from 'react';
import { Container, Grid } from '@mui/material';
import { CardPokemon } from '..';
import { ListPokemon } from '../../interface';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface PokemonListProps {
  pokemons: ListPokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }: PokemonListProps) => {
  const validationSchema = Yup.object().shape({
    searchTerm: Yup.string()
      .matches(/^[^0-9]*$/, 'Search term should not contain numbers')
      
  });

  const formik = useFormik({
    initialValues: {
      searchTerm: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => {
    },
  });

  const { values, handleChange, handleSubmit, errors, touched } = formik;

  const filteredPokemons = pokemons.filter((p) =>
    p.name.toLowerCase().includes(values.searchTerm.toLowerCase())
  );

  return (
    <Container>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Pokemon..."
            name="searchTerm"
            value={values.searchTerm}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-5 bg-yellow-200 text-white"
          />
          {touched.searchTerm && errors.searchTerm && (
            <p className="text-red-500">{errors.searchTerm}</p>
          )}
        </form>
      </div>

      <Grid container spacing={2}>
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((p) => (
            <Grid item xs={6} key={p.name}>
              <CardPokemon pokemon={p} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <p>No matching Pokemon found.</p>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default PokemonList;
