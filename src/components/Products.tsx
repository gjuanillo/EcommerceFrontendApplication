import { FaExclamationTriangle } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/actions";
import type { AppDispatch, RootState } from "../store/reducers/store";
import type { ProductType } from "../types/ProductType";

const Products = () => {
    const { isLoading, errorMessage } = useSelector((state: RootState) => state.errors)
    const { products } = useSelector((state: RootState) => state.products)
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);
    return (
        <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
            {isLoading ? (
                <p>Loading...</p>
            ) : errorMessage ? (
                <div className="flex justify-center font-display items-center h-[200px]">
                    <FaExclamationTriangle className="text-slate-800 text-3xl mr-2" />
                    <span className="text-slate-800 text-lg font-medium">{errorMessage}</span>
                </div>
            ) : (
                <div className="min-h-[700px]">
                    <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
                        {products && products.map((item: ProductType, i: number) => (
                            <ProductCard key={i} {...item} />
                        ))}
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Products;
