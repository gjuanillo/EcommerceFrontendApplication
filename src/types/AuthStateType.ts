import type { AddressDataType } from "./AddressDataType";

export type AuthStateType = {
    user: null | object;
    address: AddressDataType[];
    selectedCheckoutAddress: null | AddressDataType;
}