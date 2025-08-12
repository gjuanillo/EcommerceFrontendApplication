import { FaAddressBook } from "react-icons/fa";
import Loader from "../shared/Loader";
import { useState } from "react";
import AddressInfoModal from "./AddressInfoModal";
import AddAddressForm from "./AddAddressForm";
import type { AddressDataType } from "../../types/AddressDataType";
import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "../../store/reducers/store";
import AddressList from "./AddressList";
import DeleteModal from "./DeleteModal";
import toast from "react-hot-toast";
import { deleteUserAddress } from "../../store/actions";

const AddressInfo = ({ address }: { address: AddressDataType[] }) => {
    const noAddressExist: boolean = !address || address.length === 0;
    const { isLoading, btnLoader } = useSelector((state: RootState) => state.errors);
    const [openAddressModal, setOpenAddressModal] = useState<boolean>(false);
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    const [selectedAddress, setSelectedAddress] = useState<AddressDataType | null>(null);
    const addNewAddressHandler = () => {
        setSelectedAddress(null);
        setOpenAddressModal(true);
    }
    const dispatch = useAppDispatch();
    const deleteAddressHandler = () => {
        if (selectedAddress) {
            dispatch(deleteUserAddress(toast, selectedAddress.addressId, setOpenDeleteModal));
        }
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
                            <>
                                <div className="space-y-4 pt-6">
                                    <AddressList address={address}
                                        setSelectedAddress={setSelectedAddress}
                                        setOpenAddressModal={setOpenAddressModal}
                                        setOpenDeleteModal={setOpenDeleteModal}
                                    />
                                </div>
                                {address.length > 0 && (
                                    <div className="mt-4">
                                        <button onClick={addNewAddressHandler} className="px-4 py-2 border border-[#3E5F44] text-[#3E5F44] 
                                            hover:bg-[#3E5F44] hover:text-white font-semibold 
                                            rounded-md transition-colors duration-200">
                                            Add New
                                        </button>
                                    </div>
                                )}
                            </>

                        )}
                    </div>
                )
            }
            <AddressInfoModal isOpen={openAddressModal} setIsOpen={setOpenAddressModal}>
                <AddAddressForm address={selectedAddress} setIsOpen={setOpenAddressModal} />
            </AddressInfoModal>
            <DeleteModal isOpen={openDeleteModal}
                loader={btnLoader}
                setIsOpen={setOpenDeleteModal}
                title="Delete Address"
                onDeleteHandler={deleteAddressHandler} />
        </div >
    )
}

export default AddressInfo;
