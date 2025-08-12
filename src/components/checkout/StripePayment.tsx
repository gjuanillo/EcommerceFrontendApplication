import { Alert, AlertTitle } from "@mui/material"

const StripePayment = () => {
    return (
        <div className="h-96 flex justify-center items-center">
            <Alert severity="warning" variant="filled" style={{ maxWidth: "400px" }}>
                <AlertTitle>Stripe Unavailable</AlertTitle>
                Stripe payment is currently unavailable. Please select a different payment method or try again later
            </Alert>
        </div>
    )
}

export default StripePayment
