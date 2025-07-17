import type { Dispatch } from "@reduxjs/toolkit";
import api from "../../api/api";
import axios from "axios";

export const fetchProducts = (queryString: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: "IS_FETCHING" })
        const { data } = await api.get(`/public/products?${queryString}`);
        console.log(data.pageNumber);
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
        console.log(error);

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
