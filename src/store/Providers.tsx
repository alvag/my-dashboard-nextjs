'use client';

import { ReactNode, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/index';
import { setFavoritePokemons } from '@/store/pokemons/pokemonsSlice';

interface Props {
    children: ReactNode;
}

export const Providers = ( { children }: Props ) => {

    useEffect( () => {
        const pokemons = JSON.parse( localStorage.getItem( "favoritePokemons" ) || '{}' );
        store.dispatch( setFavoritePokemons( pokemons ) );
    }, [] )

    return (
        <Provider store={ store }>
            { children }
        </Provider>
    );
};
