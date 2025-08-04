import type { Dispatch } from "@reduxjs/toolkit";
import api from "../../api/api";
import axios, { AxiosError } from "axios";
import type { ProductType } from "../../types/ProductType";
import type { RootState } from "../reducers/store";
import { toast } from "react-hot-toast";
import type React from "react";
import type { LoginType } from "../../types/LoginType";
import { type UseFormReset } from "react-hook-form";
import type { useNavigate } from "react-router-dom";

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
};

type SetQuantityFn = React.Dispatch<React.SetStateAction<number>>;
export const increaseCartQuantity =
    (
        data: ProductType,
        tst: typeof toast,
        currentQuantity: number,
        setCurrentQuantity: SetQuantityFn
    ) =>
        (dispatch: Dispatch, getState: () => RootState) => {
            // Find the product
            const { products } = getState().products;
            console.log(data);


            const getProduct = products.find(
                (item: ProductType) => item.productId === data.productId
            );

            const isQuantityExist = getProduct.quantity >= currentQuantity + 1;

            if (isQuantityExist) {
                const newQuantity = currentQuantity + 1;
                setCurrentQuantity(newQuantity);

                dispatch({
                    type: "ADD_CART",
                    payload: { ...data, quantity: newQuantity + 1 },
                });
                localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
            } else {
                tst.error("Quantity Reached to Limit");
            }

        };

export const decreaseCartQuantity =
    (data: ProductType, newQuantity: number) => (dispatch: Dispatch, getState: () => RootState) => {
        dispatch({
            type: "ADD_CART",
            payload: { ...data, quantity: newQuantity },
        });
        localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
    }

export const removeFromCart = (data: ProductType, tst: typeof toast) => (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({ type: "REMOVE_CART", payload: data });
    tst.success(`${data.productName} removed from cart`);
    localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
}

export const authenticateLogin = (
    sendData: LoginType,
    tst: typeof toast, reset: UseFormReset<LoginType>,
    navigate: ReturnType<typeof useNavigate>,
    setLoader: React.Dispatch<React.SetStateAction<boolean>>) =>
    async (dispatch: Dispatch) => {
        try {
            setLoader(true);
            const { data } = await api.post('/auth/signin', sendData)
            dispatch({ type: "LOGIN_USER", payload: data });
            localStorage.setItem("auth", JSON.stringify(data));
            reset();
            tst.success("Login Success");
            navigate("/")
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            console.log(error);
            tst.error(error?.response?.data?.message || "Internal Server Error");
        } finally {
            setLoader(false);
        }
    }


export const userRegistration = (
    sendData: LoginType,
    tst: typeof toast, reset: UseFormReset<LoginType>,
    navigate: ReturnType<typeof useNavigate>,
    setLoader: React.Dispatch<React.SetStateAction<boolean>>) =>
    async () => {
        try {
            setLoader(true);
            const { data } = await api.post('/auth/signup', sendData)
            reset();
            tst.success(data?.message || "User Account Created");
            navigate("/login");
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            console.log(error);
            tst.error(error?.response?.data?.message || "Internal Server Error");
        } finally {
            setLoader(false);
        }
    }

export const logoutUser = (navigate: ReturnType<typeof useNavigate>) =>
    (dispatch: Dispatch) => {
        dispatch({ type: "LOGOUT_USER" });
        localStorage.removeItem("auth");
        navigate("/login");
    };

export const addUpdateUserAddress = (sendData, tst, addressId, setOpenAddress) =>
    async (dispatch: Dispatch, getState: () => RootState) => {
        dispatch({ type: "BUTTON_LOADER" });
        try {
            const { data } = await api.post('/addresses', sendData)
            tst.success("User Address Saved Successfully");
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            console.log(error);
            tst.error(error?.response?.data?.message || "Internal Server Error");
            dispatch({ type: "IS_ERROR", payload: null });
        } finally {
            setOpenAddress(false);
            dispatch({ type: "BUTTON_UNLOAD" })
        }
    }
