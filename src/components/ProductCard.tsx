import { useState } from "react";
import type { ProductType } from "../types/ProductType";

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
    const [viewProductModal, setViewProductModal] = useState<boolean>(false);
    const buttonLoader: boolean = false;
    const [selectedViewProduct, setSelectedviewProduct] = useState("");
    const isAvailable = quantity && Number(quantity) > 0;
    return (
        <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
            <div className="w-full overflow-hidden aspect-[3/2]" onClick={() => { }}>
                <img src={image} alt={productName} className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105" />
            </div>
        </div>
    )
}

export default ProductCard;
