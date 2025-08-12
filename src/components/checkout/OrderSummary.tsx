const OrderSummary = ({ totalPrice, cart, address, paymentMethod }) => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12 pr-4">
                    <div className="space-y-4">
                        <div className="p-4 shadow-gray-400 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-semibold mb-2">
                                Billing Address
                            </h2>
                            <p>
                                <strong>Building Name: </strong>
                                {address?.buildingName}
                            </p>
                            <p>
                                <strong>Street: </strong>
                                {address?.street}
                            </p>
                            <p>
                                <strong>City: </strong>
                                {address?.cityName}
                            </p>
                            <p>
                                <strong>State: </strong>
                                {address?.state}
                            </p>
                            <p>
                                <strong>Country: </strong>
                                {address?.country}
                            </p>
                            <p>
                                <strong>Zip Code: </strong>
                                {address?.zipCode}
                            </p>
                        </div>
                        <div className="p-4 shadow-gray-400 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-semibold mb-2">Payment Method</h2>
                            <p>
                                <strong>Method: </strong>
                                {paymentMethod}
                            </p>
                        </div>
                        <div className="p-4 shadow-gray-400 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-semibold mb-2">Order Items</h2>
                            <div className="space-y-2">
                                {cart?.map((item) => (
                                    <div key={item?.productId} className="flex items-center">
                                        <img src={`${import.meta.env.VITE_BACK_END_URL}/images/${item?.image}`}
                                            alt={item?.productName} className="w-12 h-12 rounded cursor-pointer 
                                            transition-transform duration-300 transform hover:scale-105" />
                                        <div className="text-gray-500 w-full">
                                            <p>{item?.productName}</p>
                                            <div className="flex justify-between">
                                                <p>{item?.quantity} x ${item?.specialPrice}</p>
                                                <p>${item?.quantity * item?.specialPrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-4/12 mt-4 lg:mt-0">
                    <div className="shadow-gray-400 rounded-lg shadow-sm p-4 space-y-4">
                        <h2 className="text-2xl font-semibold mb-2">Order Summary</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Products</span>
                                <span>${totalPrice}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>$0.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${totalPrice}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default OrderSummary;
