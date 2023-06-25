import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
    [ key: string ]: SimplePokemon;
}

const getInitialState = () => {
    return JSON.parse( localStorage.getItem( "favoritePokemons" ) || '{}' );
};

const initialState: PokemonsState = {
    ...getInitialState()
    // '1': { id: '1', name: 'bulbasaur' }
}

const pokemonsSlice = createSlice( {
    name: "pokemons",
    initialState,
    reducers: {
        toggleFavorite( state, action: PayloadAction<SimplePokemon> ) {
            const pokemon = action.payload;

            if ( !!state[ pokemon.id ] ) {
                delete state[ pokemon.id ];
            } else {
                state[ pokemon.id ] = pokemon;
            }

            localStorage.setItem( "favoritePokemons", JSON.stringify( state ) );

        }
    }
} );

export const { toggleFavorite } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
