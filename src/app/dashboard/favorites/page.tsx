import { FC } from 'react';
import { PokemonGrid } from '@/pokemons';

export const metadata = {
    title: 'Favoritos',
    description: 'Listado de Pokemons favoritos'
}

interface PokemonsProps {
}

const PokemonsPage: FC<PokemonsProps> = async ( {} ) => {
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokemons Favoritos <small
                className="text-blue-500">Global State</small></span>

            <PokemonGrid pokemons={ [] }/>
        </div>
    );
};

export default PokemonsPage;
