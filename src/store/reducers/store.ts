import { configureStore } from '@reduxjs/toolkit';
import { ProductReducer } from './ProductReducer';
import { ErrorReducer } from './ErrorReducer';

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
