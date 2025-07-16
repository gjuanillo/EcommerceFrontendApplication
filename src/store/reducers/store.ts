import { configureStore } from '@reduxjs/toolkit';
import { ProductReducer } from './ProductReducer';

const store = configureStore({
    reducer: {
        products: ProductReducer
    },
    preloadedState: {
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
