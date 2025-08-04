import { FaAddressBook } from "react-icons/fa";
import Loader from "../shared/Loader";
import { useState, type SetStateAction } from "react";
import AddressInfoModal from "./AddressInfoModal";
import AddAddressForm from "./AddAddressForm";

const AddressInfo = () => {
    const noAddressExist: boolean = true;
    const isLoading: boolean = false;
    const [openAddressModal, setOpenAddressModal] = useState<boolean>(false);
    const [selectedAddress, setSelectedAddress] = useState("");
    const addNewAddressHandler = () => {
        setSelectedAddress("");
        setOpenAddressModal(true);
    }
    return (
        <div className="pt-4">
            {
                noAddressExist ? (
                    <div className="p-6 rounded-lg max-w-md mx-auto flex flex-col justify-center items-center">
                        <FaAddressBook size={50} className="text-gray-500 mb-4" />
                        <h1 className="mb-2 text-slate-800 text-center font-semibold text-2xl">
                            No Saved Address
                        </h1>
                        <h1 className="mb-6 text-slate-600 text-center">
                            Add your delivery address to complete your purchase
                        </h1>
                        <button onClick={addNewAddressHandler} className="px-4 py-2 border border-[#3E5F44] text-[#3E5F44] 
                            hover:bg-[#3E5F44] hover:text-white font-semibold 
                            rounded-md transition-colors duration-200">
                            Add Address
                        </button>
                    </div>
                ) : (
                    <div className="relative p-6 rounded-lg max-w-md mx-auto">
                        <h1 className="text-slate-800 text-center font-bold text-2xl">
                            Choose your Delivery Address
                        </h1>
                        {isLoading ? (
                            <Loader />
                        ) : (
                            <div className="space-y-4 pt-6">
                                <p>Address List</p>
                            </div>
                        )}
                    </div>
                )
            }
            <AddressInfoModal isOpen={openAddressModal} setIsOpen={setOpenAddressModal}>
                <AddAddressForm address={selectedAddress} setIsOpen={setOpenAddressModal} />
            </AddressInfoModal>
        </div >
    )
}

export default AddressInfo;
