import { useSelector } from "react-redux";
import type { ProductType } from "../../types/ProductType";
import ProductCard from "../shared/ProductCard";
import HeroBanner from "./HeroBanner";
import { useAppDispatch, type RootState } from "../../store/reducers/store";
import { useEffect } from "react";
import { fetchProducts } from "../../store/actions";
import ProductSkeletonLoader from "../shared/ProductSkeletonLoader";
import { FaExclamationTriangle } from "react-icons/fa";

const Home = () => {
    const { isLoading, errorMessage } = useSelector((state: RootState) => state.errors)
    const { products } = useSelector((state: RootState) => state.products)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    return (
        <div className="lg:px-14 sm:px-8 px-4">
            <div className="py-6">
                <HeroBanner />
            </div>

            <div className="py-5">
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h1 className="text-slate-800 text-3xl font-bold"><span>Find what you need</span></h1>
                    <p className="text-slate-500 text-xl font-semibold"><span>Discover our products at the lowest price</span></p>
                </div>
            </div>

            {isLoading ? (
                <ProductSkeletonLoader size={12} />
            ) : errorMessage ? (
                <div className="flex justify-center font-display items-center h-[200px]">
                    <FaExclamationTriangle className="text-slate-800 text-3xl mr-2" />
                    <span className="text-slate-800 text-lg font-medium">{errorMessage}</span>
                </div>
            ) : (
                <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
                    {products && products?.slice(0, 12)
                        .map((item: ProductType, i: number) => (
                            <ProductCard key={i} {...item} />
                        ))}
                </div>
            )}
        </div>
    );
}

export default Home;
