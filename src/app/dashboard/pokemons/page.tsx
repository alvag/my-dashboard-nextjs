import { FC } from 'react';

const getPokemons = async ( limit = 20, offset = 0 ) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`;
    const res = await fetch( url );
    return await res.json();
}

interface PokemonsProps {
}

const PokemonsPage: FC<PokemonsProps> = async ( {} ) => {
    const pokemons = await getPokemons();

    return (
        <div>
            { JSON.stringify( pokemons ) }
        </div>
    );
};

export default PokemonsPage;
