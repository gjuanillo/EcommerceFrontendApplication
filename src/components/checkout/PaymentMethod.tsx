import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useAppDispatch, type RootState } from "../../store/reducers/store";
import { useSelector } from "react-redux";
import { addPaymentMethod } from "../../store/actions";

const PaymentMethod = () => {
    const { paymentMethod } = useSelector((state: RootState) => state.payment);
    const dispatch = useAppDispatch();
    const paymentMethodHandler = (paymentMethod: string) => {
        dispatch(addPaymentMethod(paymentMethod));
    }
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
