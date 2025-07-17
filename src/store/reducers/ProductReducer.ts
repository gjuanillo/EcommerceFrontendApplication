import type { AnyAction } from "@reduxjs/toolkit";
import type { ProductType } from "../../types/ProductType";

interface ProductState {
    products: ProductType[] | null;
    categories: string | null;
    pagination: {
        pageNumber?: number;
        pageSize?: number;
        totalElements?: number;
        totalPages?: number;
        lastPage?: boolean;
    };
}

const initialState: ProductState = {
    products: null,
    categories: null,
    pagination: {},
};


export const ProductReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return {
                ...state,
                products: action.payload,
                pagination: {
                    ...state.pagination,
                    pageNumber: action.pageNumber,
                    pageSize: action.pageSize,
                    totalElements: action.totalElements,
                    totalPages: action.totalPages,
                    lastPage: action.lastPage
                },
            }
        case "FETCH_CATEGORIES":
            return {
                ...state,
                categories: action.payload,
            }
        default:
            return state;
    }
};
