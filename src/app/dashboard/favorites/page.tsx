import { FC } from 'react';
import { FavoritePokemons } from '@/pokemons/components/FavoritePokemons';

export const metadata = {
    title: 'Favoritos',
    description: 'Listado de Pokemons favoritos'
}

interface FavoritesProps {
}

const FavoritesPage: FC<FavoritesProps> = async ( {} ) => {


    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokemons Favoritos <small
                className="text-blue-500">Global State</small></span>

            <FavoritePokemons/>
        </div>
    );
};

export default FavoritesPage;
