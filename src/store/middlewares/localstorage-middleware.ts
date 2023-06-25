import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export const localstorageMiddleware = ( state: MiddlewareAPI ) => {
    return ( next: Dispatch ) => {
        return ( action: Action ) => {
            const result = next( action );
            if ( action.type === 'pokemons/toggleFavorite' ) {
                const { pokemons } = state.getState() as RootState;
                localStorage.setItem( 'favoritePokemons', JSON.stringify( pokemons ) );
            }
            return result;
        };
    };
}
