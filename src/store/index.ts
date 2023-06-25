import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import counterReducer from './counter/counterSlice';
import pokemonsReducer from './pokemons/pokemonsSlice';
import { localstorageMiddleware } from '@/store/middlewares/localstorage-middleware';

export const store = configureStore( {
    reducer: {
        counter: counterReducer,
        pokemons: pokemonsReducer
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( [ localstorageMiddleware ] )
} )

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
