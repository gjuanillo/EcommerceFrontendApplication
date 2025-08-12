import type { AnyAction } from "@reduxjs/toolkit";
import type { AuthStateType } from "../../types/AuthStateType";

const initialState: AuthStateType = {
    user: null,
    address: [],
    selectedCheckoutAddress: null,
}

export const authReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case "LOGIN_USER":
            return { ...state, user: action.payload }
        case "USER_ADDRESS":
            return { ...state, address: action.payload }
        case "SELECT_CHECKOUT_ADDRESS":
            return { ...state, selectedCheckoutAddress: action.payload }
        case "REMOVE_CHECKOUT_ADDRESS":
            return { ...state, selectedCheckoutAddress: null }
        case "LOGOUT_USER":
            return { user: null, address: [], selectedCheckoutAddress: null, }
        default:
            return state;
    }
}
