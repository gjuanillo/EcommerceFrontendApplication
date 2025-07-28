import type { AnyAction } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    address: [],
}

export const authReducer = (state = initialState, action: AnyAction) => {
    return state;
}
