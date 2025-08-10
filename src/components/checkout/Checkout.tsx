import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { useEffect, useState } from "react";
import AddressInfo from "./AddressInfo";
import { useAppDispatch, type RootState } from "../../store/reducers/store";
import { getUserAddresses } from "../../store/actions";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import Loader from "../shared/Loader";
import ErrorPage from "../shared/ErrorPage";
import PaymentMethod from "./PaymentMethod";

const Checkout = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const dispatch = useAppDispatch();
    const { address, selectedCheckoutAddress } = useSelector((state: RootState) => state.auth);
    const { isLoading, errorMessage } = useSelector((state: RootState) => state.errors);
    const steps: string[] = [
        "Address",
        "Payment Method",
        "Order Summary",
        "Payment"
    ]
    useEffect(() => {
        dispatch(getUserAddresses());
    }, [dispatch])
    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };
    const handleNext = () => {
        if (activeStep === 0 && !selectedCheckoutAddress) {
            toast.error("Please select your address to proceed!");
            return;
        }
        if (activeStep === 1 && (!selectedCheckoutAddress || !paymentMethod)) {
            toast.error("Please select payment address to proceed!");
            return;
        }
        setActiveStep((prev) => prev + 1);
    };
    const paymentMethod = false;
    return (
        <div className="py-14 min-h-[calc(120vh-100px)]">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {isLoading ? (
                <div className="lg:w-[80%] mx-auto py-5">
                    <Loader />
                </div>
            ) : (
                <div className="mt-5">
                    {activeStep === 0 && <AddressInfo address={address} />}
                    {activeStep === 1 && <PaymentMethod />}
                </div>
            )}
            <div className="flex justify-between items-center px-4 fixed z-50 h-24 bottom-0 bg-white left-0 w-full py-4 border-slate-200"
                style={{ boxShadow: "0 -2px 4px rgba(100, 100, 100, 0.15)" }}>
                <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack}>
                    Back
                </Button>
                {activeStep !== steps.length - 1 && (
                    <button disabled={errorMessage ||
                        (activeStep === 0 ?
                            !selectedCheckoutAddress :
                            activeStep === 1 ?
                                !paymentMethod :
                                false)}
                        className={`bg-blue-500 font-semibold px-6 h-10 rounded-md text-white 
                        ${errorMessage || (activeStep === 0 && !selectedCheckoutAddress) || (activeStep === 1 && !paymentMethod) ? "opacity-60" : ""
                            }`} onClick={handleNext}>
                        Proceed
                    </button>
                )}
            </div>
            {errorMessage && <ErrorPage message={errorMessage} />}
        </div>
    );
}

export default Checkout;
