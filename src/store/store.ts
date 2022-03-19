import { configureStore } from '@reduxjs/toolkit';
import launchesReducer from './slices/launchesSlice';

export enum Reducer {
    Launches = 'Launches'
}

export const store = configureStore({
    reducer: {
        [Reducer.Launches]: launchesReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;