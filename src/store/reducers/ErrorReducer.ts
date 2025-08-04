import type { AnyAction } from "@reduxjs/toolkit";

interface initialStateType {
    isLoading: boolean;
    errorMessage: string | null
    categoryLoader: boolean;
    categoryError: string | null;
    btnLoader: boolean;
}

const initialState: initialStateType = {
    isLoading: false,
    errorMessage: null,
    categoryLoader: false,
    categoryError: null,
    btnLoader: false,
};

export const ErrorReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case "IS_FETCHING":
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
            };
        case "BUTTON_LOADER":
            return {
                ...state,
                btnLoader: true,
                errorMessage: null,
                categoryError: null
            };
        case "IS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
            };
        case "IS_ERROR":
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
            };
        case "CATEGORY_SUCCESS":
            return {
                ...state,
                categoryLoader: false,
                categoryError: null
            };
        case "CATEGORY_LOADER":
            return {
                ...state,
                categoryLoader: true,
            };
        default:
            return state;
    }
};
