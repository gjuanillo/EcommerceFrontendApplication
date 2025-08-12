import { Alert, AlertTitle } from "@mui/material"

const PaypalPayment = () => {
    return (
        <div className="h-96 flex justify-center items-center">
            <Alert severity="warning" variant="filled" style={{ maxWidth: "400px" }}>
                <AlertTitle>Paypal Unavailable</AlertTitle>
                Paypal payment is currently unavailable. Please select a different payment method or try again later
            </Alert>
        </div>
    )
}

export default PaypalPayment
