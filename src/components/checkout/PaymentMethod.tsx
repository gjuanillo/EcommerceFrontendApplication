import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useAppDispatch, type RootState } from "../../store/reducers/store";
import { useSelector } from "react-redux";
import { addPaymentMethod, createUserCart } from "../../store/actions";
import { useEffect } from "react";

const PaymentMethod = () => {
    const { paymentMethod } = useSelector((state: RootState) => state.payment);
    const { cart, cartId } = useSelector((state: RootState) => state.carts);
    const { isLoading, errorMessage } = useSelector((state: RootState) => state.errors);
    const dispatch = useAppDispatch();
    const paymentMethodHandler = (paymentMethod: string) => {
        dispatch(addPaymentMethod(paymentMethod));
    }
    useEffect(() => {
        if (cart.length > 0 && !cartId && !errorMessage) {
            const sendCartItems = cart.map((item) => {
                return {
                    productId: item.productId,
                    quantity: item.quantity,
                };
            });
            dispatch(createUserCart(sendCartItems));
        }
    }, [dispatch, cartId, cart, errorMessage]);
    return (
        <div className="max-w-md mx-auto p-5 bg-white shadow-md shadow-gray-400 rounded-lg mt-16">
            <h1 className="text-2xl font-semibold mb-4">
                Select Payment Method
            </h1>
            <FormControl>
                <RadioGroup
                    aria-label="payment method"
                    name="paymentMethod"
                    value={paymentMethod}
                    onChange={(e) => paymentMethodHandler(e.target.value)}
                >
                    <FormControlLabel
                        value="Stripe"
                        control={<Radio color='primary' />}
                        label="Stripe"
                        className='text-gray-700' />

                    <FormControlLabel
                        value="Paypal"
                        control={<Radio color='primary' />}
                        label="Paypal"
                        className='text-gray-700' />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default PaymentMethod;
