import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../store/actions";
import { useAppDispatch } from "../store/reducers/store";

const useProductFilter = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const params = new URLSearchParams();
        const currentPage = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
        params.set("pageNumber", String(currentPage - 1));
        const sortOrder = searchParams.get("sortby") || "asc";
        const categoryParams = searchParams.get("category") || null;
        const keyword = searchParams.get("keyword") || null;
        params.set("sortBy", "price");
        params.set("sortOrder", sortOrder)

        if (categoryParams) {
            params.set("category", categoryParams);
        }
        if (keyword) {
            params.set("keyword", keyword);
        }

        const queryString = params.toString();

        dispatch(fetchProducts(queryString));
    }, [dispatch, searchParams]);

};

export default useProductFilter;
