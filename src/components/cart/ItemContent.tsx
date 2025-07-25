import { useState } from "react";
import { type ProductType } from "../../types/ProductType";
import { HiOutlineTrash } from "react-icons/hi"
import SetQuantity from "./SetQuantity";
import { useAppDispatch } from "../../store/reducers/store";
import { decreaseCartQuantity, increaseCartQuantity, removeFromCart } from "../../store/actions";
import toast from "react-hot-toast";

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
    const dispatch = useAppDispatch();
    const handleQtyIncrease = (cartItems: ProductType) => {
        dispatch(increaseCartQuantity(
            cartItems,
            toast,
            currentQuantity,
            setCurrentQuantity
        ));
    }

    const handleQtyDecrease = (cartItems: ProductType) => {
        if (currentQuantity > 1) {
            const newQuantity = currentQuantity - 1;
            setCurrentQuantity(newQuantity);
            dispatch(decreaseCartQuantity(cartItems, newQuantity));
        }
    };

    const removeItemFromCart = (cartItems: ProductType) => {
        dispatch(removeFromCart(cartItems, toast));
    };

    return (
        <div className="grid md:grid-cols-5 grid-cols-4 md:text-md text-sm items-center border-t-[1px] border-slate-200">
            <div className="md:col-span-2 justify-self-start flex flex-col gap-2">
                <div className="flex md:flex-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start">
                    <h3 className="lg:text-[17px] text-sm font-semibold text-slate-600">{productName}</h3>
                </div>
                <div className="md:w-32 mx-3 sm:w-21 w-12">
                    <img src={`${import.meta.env.VITE_BACK_END_URL}/images${image}`} alt={productName} className="md:h-32 sm:h-21 h-12 md:w-32 sm:w-21 w-12 object-cover rounded-md" />
                </div>
                <div className="flex items-start gap-5 mt-3">
                    <button
                        onClick={() => removeItemFromCart({
                            image,
                            productName,
                            description,
                            specialPrice,
                            price,
                            productId,
                            quantity,
                        })}
                        className="flex items-center font-semibold space-x-2 px-4 py-1 text-xs border border-rose-600 text-rose-600 rounded-md hover:bg-red-50 transition-colors duration-200">
                        <HiOutlineTrash size={16} className="text-rose-600" />
                        Remove
                    </button>
                </div>
            </div>
            <div className="justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
                ${Number(specialPrice).toFixed(2)}
            </div>
            <div className="justify-self-center">
                <SetQuantity quantity={currentQuantity} cardCounter={true}
                    handleQtyIncrease={() => handleQtyIncrease(
                        {
                            productId,
                            productName,
                            image,
                            description,
                            quantity,
                            price,
                            discount,
                            specialPrice
                        }
                    )} handleQtyDecrease={() => {
                        handleQtyDecrease({
                            productId,
                            productName,
                            image,
                            description,
                            quantity,
                            price,
                            discount,
                            specialPrice
                        })
                    }} />
            </div>
            <div className="justify-self-center">
                {Number(currentQuantity * Number(specialPrice)).toFixed(2)}
            </div>
        </div>
    )
}

export default ItemContent;
