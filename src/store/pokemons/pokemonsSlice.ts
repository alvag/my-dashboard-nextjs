import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
    favorites: {
        [ key: string ]: SimplePokemon;
    }
}

const getInitialState = () => {
    // if ( typeof localStorage === 'undefined' ) return {};

    return JSON.parse( localStorage.getItem( "favoritePokemons" ) || '{}' );
};

const initialState: PokemonsState = {
    favorites: {}
    // ...getInitialState()
    // '1': { id: '1', name: 'bulbasaur' }
}

const pokemonsSlice = createSlice( {
    name: "pokemons",
    initialState,
    reducers: {
        toggleFavorite( state, action: PayloadAction<SimplePokemon> ) {
            const pokemon = action.payload;

            if ( !!state.favorites[ pokemon.id ] ) {
                delete state.favorites[ pokemon.id ];
            } else {
                state.favorites[ pokemon.id ] = pokemon;
            }

            localStorage.setItem( "favoritePokemons", JSON.stringify( state.favorites ) );
        },
        setFavoritePokemons( state, action: PayloadAction<{ [ key: string ]: SimplePokemon }> ) {
            state.favorites = action.payload;
        }
    }
} );

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
