import { Step, StepLabel, Stepper } from "@mui/material";
import { useEffect, useState } from "react";
import AddressInfo from "./AddressInfo";
import { useAppDispatch, type RootState } from "../../store/reducers/store";
import { getUserAddresses } from "../../store/actions";
import { useSelector } from "react-redux";

const Checkout = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const dispatch = useAppDispatch();
    const { address } = useSelector((state: RootState) => state.auth);
    const steps: string[] = [
        "Address",
        "Payment Method",
        "Order Summary",
        "Payment"
    ]
    useEffect(() => {
        dispatch(getUserAddresses());
    }, [dispatch])
    return (
        <div className="py-14 min-h-[calc(120vh-100px)]">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className="mt-5">
                {activeStep === 0 && <AddressInfo address={address} />}
            </div>
        </div>
    )
}

export default Checkout;
