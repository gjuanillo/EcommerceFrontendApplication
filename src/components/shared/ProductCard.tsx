import { useState } from "react";
import type { ProductType } from "../../types/ProductType";
import { FaShoppingCart } from "react-icons/fa";
import ProductViewModal from "./ProductViewModal";
import truncateText from "../../utils/truncateText";
import { useAppDispatch } from "../../store/reducers/store";
import { addToCart } from "../../store/actions";
import toast from 'react-hot-toast';

const ProductCard = ({
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice
}: ProductType) => {
    const qty = 1;
    const [viewProductModal, setViewProductModal] = useState<boolean>(false);
    const buttonLoader: boolean = false;
    const [selectedViewProduct, setSelectedViewProduct] = useState<ProductType>();
    const isAvailable: number | boolean = quantity && Number(quantity) > 0;
    const dispatch = useAppDispatch();
    const product: ProductType = {
        productId,
        productName,
        image,
        description,
        quantity,
        price,
        discount,
        specialPrice
    }

    const handleProductView = (product: ProductType) => {
        setSelectedViewProduct(product);
        setViewProductModal(true);
    };

    const addToCartHandler = (cartItems: ProductType) => {
        //Self Note -> Add a dynamic feature for adding custom product quantity for each card
        dispatch(addToCart(cartItems, qty, toast))
    };

    return (
        <div className="rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
            <div className="w-full overflow-hidden aspect-[3/2]" onClick={() => {
                handleProductView(product);
            }}>
                <img src={`${import.meta.env.VITE_BACK_END_URL}/images${image}`} alt={productName} className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105" />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 cursor-pointer" onClick={() => {
                    handleProductView(product)
                }}>{truncateText(productName, 50)}</h2>
                <div className="min-h-20 max-h-20">
                    <p className="text-gray-600 text-sm">{truncateText(description, 80)}</p>
                </div>
                <div className="flex items-center justify-between">
                    {specialPrice ? (
                        <div className="flex flex-col">
                            <span className="text-gray-400 line-through">${Number(price).toFixed(2)}</span>
                            <span className="text-xl font-bold text-slate-700">${Number(specialPrice).toFixed(2)}</span>
                        </div>
                    ) : (
                        <span className="text-xl font-bold text-slate-700">{"  "}${Number(price).toFixed(2)}</span>
                    )}

                    <button disabled={!isAvailable || buttonLoader} onClick={() => addToCartHandler(
                        product
                    )} className={`bg-blue-500 ${isAvailable ? "opacity-100 hover:bg-blue-600"
                        : "opacity-60"} text-white py-2 px-3 rounded-lg items-center transition-colors duration-300 w-36 flex justify-center`}>
                        <FaShoppingCart className="mr-2" />
                        {isAvailable ? "Add to Cart" : "Out of Stock"}
                    </button>
                </div>
            </div>
            <ProductViewModal open={viewProductModal} setOpen={setViewProductModal}
                product={selectedViewProduct} isAvailable={isAvailable} />
        </div >
    )
}

export default ProductCard;
