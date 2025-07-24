import type { AnyAction } from "@reduxjs/toolkit";
import type { ProductType } from "../../types/ProductType";

interface CartState {
    cart: ProductType[];
    totalPrice: number;
    cartId: number | null;
}

const initialState: CartState = {
    cart: [],
    totalPrice: 0,
    cartId: null,
}

export const cartReducer = (state = initialState, action: AnyAction) => {

    switch (action.type) {
        case "ADD_CART":
            {
                const productToAdd = action.payload;
                const existingProduct = state.cart.find(
                    (item) => item.productId === productToAdd.productId
                );

                if (existingProduct) {
                    const updatedCart = state.cart.map(item => {
                        if (item.productId === productToAdd.productId) {
                            return productToAdd;
                        } else {
                            return item;
                        }
                    });
                    return {
                        ...state,
                        cart: updatedCart,
                    }
                } else {
                    const newCart = [...state.cart, productToAdd];
                    return {
                        ...state,
                        cart: newCart,
                    };
                }
            }
    }

    return state;
}
