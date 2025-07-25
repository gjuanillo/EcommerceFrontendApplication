import type { ProductType } from "./ProductType";

export interface CartStateType {
    cart: ProductType[];
    totalPrice: number;
    cartId: number | null;
}
