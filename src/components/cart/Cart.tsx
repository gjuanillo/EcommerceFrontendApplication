import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { type RootState } from "../../store/reducers/store";
import { useSelector } from "react-redux";
import ItemContent from "./ItemContent";
import type { ProductType } from "../../types/ProductType";
import type { CartStateType } from "../../types/CartStateType";

const Cart = () => {
    const cartState = useSelector((state: RootState) => state.carts); // full cart slice
    const { cart } = cartState;

    const newCart: CartStateType = {
        ...cartState,
        totalPrice: cart.reduce((acc, cur) => {
            return acc + Number(cur?.specialPrice) * Number(cur?.quantity);
        }, 0),
    };

    if (!cart || cart.length === 0) {
        return <h1>Cart is empty</h1>
    }
    return (
        <div className="lg:px-14 sm:px-8 px-4 py-10">
            <div className="flex flex-col items-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                    Your Cart
                </h1>
                <p className="text-lg text-gray-600 mt-2">Your selected items, ready for checkout</p>
            </div>

            {/* Header */}
            <div className="grid md:grid-cols-5 grid-cols-4 gap-4 pb-2 font-semibold items-center">
                <div className="md:col-span-2 justify-self-start text-lg text-slate-800 lg:ps-4">
                    Title
                </div>
                <div className="justify-self-center text-lg text-slate-800">
                    Price
                </div>
                <div className="justify-self-center text-lg text-slate-800">
                    Quantity
                </div>
                <div className="justify-self-center text-lg text-slate-800">
                    Total
                </div>
            </div>

            {/* Items */}
            <div>
                {cart && cart.length > 0 && cart.map((item: ProductType) =>
                    <ItemContent key={item.productId} {...item} />
                )}
            </div>

            <div className="border-t-[1.5px] border-slate-300 py-4 flex sm:flex-row sm:px-0 px-2 flex-col sm:justify-between gap-4">
                <div>
                </div>
                <div className="flex text-sm gap-1 flex-col">
                    <div className="flex justify-between w-full md:text-lg text-sm font-semibold">
                        <span>Subtotal</span>
                        <span>{newCart.totalPrice}</span>
                    </div>
                    <p className="text-slate-500">
                        Taxes and shipping are calculated at checkout
                    </p>
                    <Link className="w-full flex justify-end " to="/checkout">
                        <button onCopy={() => { }}
                            className="font-semibold w-[300px] py-2 px-4 border border-[#3E5F44] text-[#3E5F44] hover:bg-[#3E5F44] hover:text-white transition duration-300 flex items-center justify-center gap-2 rounded-sm">
                            <MdShoppingCart size={20} />
                            Proceed to Checkout
                        </button>
                    </Link>
                    <Link className="flex justify-end gap-2 items-center mt-2 text-slate-500" to="/products">
                        <MdArrowBack />
                        <span>Continue Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;
