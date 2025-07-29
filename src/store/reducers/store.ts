import { configureStore } from '@reduxjs/toolkit';
import { ProductReducer } from './ProductReducer';
import { ErrorReducer } from './ErrorReducer';
import { useDispatch } from 'react-redux';
import { cartReducer } from './cartReducer';
import { authReducer } from './authReducer';


const rawUser = localStorage.getItem("auth");
const user = rawUser ? JSON.parse(rawUser) : null;
const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
const initialState = {
    carts: {
        cart: cartItems,
        totalPrice: 0,
        cartId: null
    },
    auth: {
        user: user,
        address: []
    },
}

const store = configureStore({
    reducer: {
        products: ProductReducer,
        errors: ErrorReducer,
        carts: cartReducer,
        auth: authReducer
    },
    preloadedState: initialState,
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
