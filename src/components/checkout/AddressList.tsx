import { FaBuilding, FaCheckCircle, FaEdit, FaStreetView, FaTrash } from "react-icons/fa";
import { useAppDispatch, type RootState } from "../../store/reducers/store";
import type { AddressDataType } from "../../types/AddressDataType";
import { MdLocationCity, MdPinDrop, MdPublic } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectUserCheckoutAddress } from "../../store/actions";

type AddressListPropType = {
    address: AddressDataType[],
    setSelectedAddress: React.Dispatch<React.SetStateAction<AddressDataType>>,
    setOpenAddressModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AddressList = ({ address, setSelectedAddress, setOpenAddressModal }: AddressListPropType) => {
    const dispatch = useAppDispatch();
    const { selectedCheckoutAddress } = useSelector((state: RootState) => state.auth);
    const handleAddressSelection = (add: AddressDataType) => {
        dispatch(selectUserCheckoutAddress(add))
    }
    const onEditButtonHandler = (add: AddressDataType) => {
        setSelectedAddress(add);
        setOpenAddressModal(true);
    }
    const onDeleteButtonHandler = (add: AddressDataType) => {
        setSelectedAddress(add);
    }
    return (
        <div className="space-y-4">
            {address.map((add) => (
                <div key={add.addressId} onClick={() => handleAddressSelection(add)}
                    className={`p-4 border rounded-md cursor-pointer relative 
                    ${selectedCheckoutAddress?.addressId === add.addressId ? 'bg-green-100' : 'bg-white'}`}>
                    <div className="flex items-start">
                        <div className="space-y-1">
                            <div className="flex items-center">
                                <FaBuilding size={14} className="mr-2 text-gray-600" />
                                <p className="font-semibold">{add.buildingName}</p>
                                {selectedCheckoutAddress?.addressId === add.addressId && (
                                    <FaCheckCircle className="text-green-500 ml-2" />
                                )}
                            </div>
                            <div className="flex items-center">
                                <FaStreetView size={17} className="mr-2 text-gray-600" />
                                <p>{add.street}</p>
                            </div>
                            <div className="flex items-center">
                                <MdLocationCity size={17} className="mr-2 text-gray-600" />
                                <p>{add.cityName}, {add.state}</p>
                            </div>
                            <div className="flex items-center">
                                <MdPinDrop size={17} className="mr-2 text-gray-600" />
                                <p>{add.zipCode}</p>
                            </div>
                            <div className="flex items-center">
                                <MdPublic size={17} className="mr-2 text-gray-600" />
                                <p>{add.country}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 absolute top-4 right-2">
                        <button onClick={() => onEditButtonHandler(add)}>
                            <FaEdit size={18} className="text-teal-700" />
                        </button>
                        <button onClick={() => onDeleteButtonHandler(add)}>
                            <FaTrash size={17} className="text-rose-600" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AddressList;
