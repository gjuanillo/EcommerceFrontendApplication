import type { UnknownAction } from "@reduxjs/toolkit";

const initialState = {
    paymentMethod: null,
}

export const paymentMethodReducer = (state = initialState, action: UnknownAction) => {
    switch (action.type) {
        case "ADD_PAYMENT_METHOD":
            return {
                ...state,
                paymentMethod: action.payload,
            };
        default:
            return state;
    }

}
