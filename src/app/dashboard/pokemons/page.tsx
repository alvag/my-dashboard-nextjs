import { FC } from 'react';
import { Pokemon, PokemonGrid, PokemonsResponse } from '@/app/pokemons';

const getPokemons = async ( limit = 20, offset = 0 ): Promise<Pokemon[]> => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`;
    const res = await fetch( url );
    const data: PokemonsResponse = await res.json();

    const pokemons: Pokemon[] = data.results.map( ( pokemon, index ) => ( {
        id: pokemon.url.split( '/' ).at( -2 )!,
        name: pokemon.name,
    } ) )

    return pokemons;
}

interface PokemonsProps {
}

const PokemonsPage: FC<PokemonsProps> = async ( {} ) => {
    const pokemons = await getPokemons( 151 );

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de Pokemons <small>statico</small></span>

            <PokemonGrid pokemons={ pokemons }/>
        </div>
    );
};

export default PokemonsPage;
