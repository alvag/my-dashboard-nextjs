'use client';

import { useAppSelector } from '@/store';
import { PokemonGrid } from '@/pokemons';

export const FavoritePokemons = () => {
    const pokemons = useAppSelector( state => Object.values( state.pokemons ) );


    return (
        <PokemonGrid pokemons={ pokemons }/>
    );
};
