import { useState } from "react";
import { type ProductType } from "../../types/ProductType";
import { HiOutlineTrash } from "react-icons/hi"
import SetQuantity from "./SetQuantity";

const ItemContent = ({
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice
}: ProductType) => {

    const [currentQuantity, setCurrentQuantity] = useState<number>(quantity);
    return (
        <div className="grid md:grid-cols-5 grid-cols-4 md:text-md text-sm items-center border-t-[1px] border-slate-200">
            <div className="md:col-span-2 justify-self-start flex flex-col gap-2">
                <div className="flex md:flex-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start">
                    <h3 className="lg:text-[17px] text-sm font-semibold text-slate-600">{productName}</h3>
                </div>
                <div className="md:w-32 sm:w-21 w-12">
                    <img src={`${import.meta.env.VITE_BACK_END_URL}/images${image}`} alt={productName} className="md:h-32 sm:h-21 h-12 md:w-32 sm:w-21 w-12 object-cover rounded-md" />
                </div>
                <div className="flex items-start gap-5 mt-3">
                    <button onClick={() => { }}
                        className="flex items-center font-semibold cursor-pointer border rounded-sm hover:bg-rose-800 hover:text-white transition-colors duration-300 space-x-2 px-4 py-1 text-xs text-rose-600">
                        <HiOutlineTrash size={16} />
                        Remove
                    </button>
                </div>
            </div>
            <div className="justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
                ${Number(specialPrice).toFixed(2)}
            </div>
            <div className="justify-self-center">
                <SetQuantity quantity={currentQuantity} cardCounter={true}
                    handleQtyIncrease={() => { }} handleQtyDecrease={() => { }} />
            </div>
            <div className="justify-self-center">
                {Number(currentQuantity * Number(specialPrice)).toFixed(2)}
            </div>
        </div>
    )
}

export default ItemContent;
