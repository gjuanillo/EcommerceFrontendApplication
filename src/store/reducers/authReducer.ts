import type { AnyAction } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    address: [],
}

export const authReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case "LOGIN_USER":
            return { ...state, user: action.payload }
        default:
            return state;
    }
}
