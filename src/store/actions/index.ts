import type { Dispatch } from "@reduxjs/toolkit";
import api from "../../api/api";
import axios from "axios";
import type { ProductType } from "../../types/ProductType";
import type { RootState } from "../reducers/store";
import { toast } from "react-hot-toast";

export const fetchProducts = (queryString?: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: "IS_FETCHING" })
        const { data } = await api.get(`/public/products?${queryString}`);
        dispatch({
            type: "FETCH_PRODUCTS",
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage
        });
        dispatch({ type: "IS_SUCCESS" })
    } catch (error: unknown) {
        let errorMessage = "Failed to fetch products";

        if (axios.isAxiosError(error)) {
            if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            } else if (error.message) {
                errorMessage = error.message;
            }
        } else if (error instanceof Error) {
            errorMessage = error.message;
        }

        dispatch({
            type: "IS_ERROR",
            payload: errorMessage,
        });
    }
};

export const fetchCategories = () => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: "CATEGORY_LOADER" })
        const { data } = await api.get(`/public/categories`);
        dispatch({
            type: "FETCH_CATEGORIES",
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage
        });
        dispatch({ type: "CATEGORY_SUCCESS" })
    } catch (error: unknown) {

        let errorMessage = "Failed to fetch categories";

        if (axios.isAxiosError(error)) {
            if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            } else if (error.message) {
                errorMessage = error.message;
            }
        } else if (error instanceof Error) {
            errorMessage = error.message;
        }

        dispatch({
            type: "IS_ERROR",
            payload: errorMessage,
        });
    }
};

export const addToCart = (data: ProductType, qty = 1, tst: typeof toast) => (dispatch: Dispatch, getState: () => RootState) => {
    const { products } = getState().products;
    const getProduct = products.find((item: ProductType) =>
        item.productId === data.productId);

    const isQuantityExist = getProduct.quantity >= qty;

    if (isQuantityExist) {
        dispatch({ type: "ADD_CART", payload: { ...data, quantity: qty } });
        tst.success(`${data?.productName} added to cart!`)
        localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
    } else {
        tst.error(`Error, ${data?.productName} not available!`)
    }
}
