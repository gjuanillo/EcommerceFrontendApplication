import { configureStore } from '@reduxjs/toolkit';
import { ProductReducer } from './ProductReducer';
import { ErrorReducer } from './ErrorReducer';
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
        products: ProductReducer,
        errors: ErrorReducer
    },
    preloadedState: {
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
