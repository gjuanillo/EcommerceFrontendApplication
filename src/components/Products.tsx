import { FaExclamationTriangle } from "react-icons/fa";
import type { ProductType } from "../types/ProductType";
import ProductCard from "./ProductCard";
import { products } from "./TempData";

const Products = () => {
    const productList: ProductType[] = products;
    const errorMessage: string = "Encountered Errror Fetching Data";
    const isLoading: boolean = false;
    return (
        <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
            {isLoading ? (
                <p>Loading...</p>
            ) : errorMessage ? (
                <div className="flex justify-center font-display items-center h-[200px]">
                        <FaExclamationTriangle className="text-slate-800 text-3xl mr-2"/>
                        <span className="text-slate-800 text-lg font-medium">{errorMessage}</span>
                </div>
            ) : (
                <div className="min-h-[700px]">
                    <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
                        {productList && productList.map((item, i) => (
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
