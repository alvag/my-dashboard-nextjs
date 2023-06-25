import { FC } from 'react';
import { SimplePokemon, PokemonGrid, PokemonsResponse } from '@/pokemons';

const getPokemons = async ( limit = 20, offset = 0 ): Promise<SimplePokemon[]> => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`;
    const res = await fetch( url );
    const data: PokemonsResponse = await res.json();

    return data.results.map( ( pokemon, index ) => ( {
        id: pokemon.url.split( '/' ).at( -2 )!,
        name: pokemon.name,
    } ) );
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
