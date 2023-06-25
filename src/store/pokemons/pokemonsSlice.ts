import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
    [ key: string ]: SimplePokemon;
}

const initialState: PokemonsState = {
    '1': {
        id: '1',
        name: 'bulbasaur'
    }
}

const pokemonsSlice = createSlice( {
    name: "pokemons",
    initialState,
    reducers: {
        toggleFavorite( state, action: PayloadAction<SimplePokemon> ) {
            const pokemon = action.payload;

            if ( !!state[ pokemon.id ] ) {
                delete state[ pokemon.id ];
                return
            }

            state[ pokemon.id ] = pokemon;
        }
    }
} );

export const { toggleFavorite } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
