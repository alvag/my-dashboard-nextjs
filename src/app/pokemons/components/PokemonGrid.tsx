import { Pokemon, PokemonCard } from '@/app/pokemons';

interface Props {
    pokemons: Pokemon[];
}

export const PokemonGrid = ( { pokemons }: Props ) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {
                pokemons.map( ( pokemon, index ) => (
                    <PokemonCard key={ pokemon.id } pokemon={ pokemon }/>
                ) )
            }
        </div>
    );
};