import { FaExclamationTriangle } from "react-icons/fa";
import ProductCard from "../shared/ProductCard";
import { useSelector } from "react-redux";
import { useAppDispatch, type RootState} from "../../store/reducers/store";
import type { ProductType } from "../../types/ProductType";
import Filter from "./Filter";
import useProductFilter from "../../hooks/useProductFilter";
import { useEffect } from "react";
import { fetchCategories } from "../../store/actions";
import ProductSkeletonLoader from "../shared/ProductSkeletonLoader";
import Paginations from "../shared/Paginations";

const Products = () => {
    const { isLoading, errorMessage } = useSelector((state: RootState) => state.errors)
    const { products, categories, pagination } = useSelector((state: RootState) => state.products)
    const dispatch = useAppDispatch();
    useProductFilter();
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])
    return (
        <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
            <Filter categories={categories ? categories : []} />
            {isLoading ? (
                <ProductSkeletonLoader />
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
                    <div className="flex justify-end pt-10">
                        <Paginations pageNumber={pagination?.totalPages} productNumber={pagination?.totalElements} />
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Products;
