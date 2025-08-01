import InputField from "../shared/InputField";
import Loader from "../shared/Loader";
import { useForm } from "react-hook-form";
import { FaAddressCard } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/reducers/store";

const AddAddressForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: "onTouched" });
    const onSaveAddressHandler = () => {
        console.log("Save Address");
    }
    const { btnLoader } = useSelector((state: RootState) => state.errors)
    return (
        <div className="">
            <form onSubmit={handleSubmit(onSaveAddressHandler)}
                className="">
                <div className="flex items-center justify-center mb-4 font-semibold">
                    <FaAddressCard className="mr-2 text-2xl" />
                    Add Address
                </div>
                <div className="flex flex-col gap-4">
                    <InputField
                        label="Building Name"
                        required
                        id="buildingName"
                        type="text"
                        message="Building name is required"
                        placeHolder="Enter Building Name"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="Street"
                        required
                        id="street"
                        type="text"
                        message="Street is required"
                        placeHolder="Enter State"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="City"
                        required
                        id="cityName"
                        type="text"
                        message="City name is required"
                        placeHolder="Enter City"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="State"
                        required
                        id="state"
                        type="text"
                        message="State is required"
                        placeHolder="Enter State"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="Zip Code"
                        required
                        id="zipCode"
                        type="text"
                        message="Zip Code is required"
                        placeHolder="Enter Zip Code"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="Country"
                        required
                        id="country"
                        type="text"
                        message="Country is required"
                        placeHolder="Enter Country"
                        register={register}
                        errors={errors}
                    />
                </div>
                <button disabled={btnLoader}
                    className="mt-5 px-3 py-2 border border-[#3E5F44] text-[#3E5F44] 
                            hover:bg-[#3E5F44] hover:text-white font-semibold 
                            rounded-md transition-colors duration-200"
                    type="submit">
                    {btnLoader ? (
                        <>
                            <Loader
                                containerClassName="w-auto h-auto"
                                innerClassName="flex items-center"
                                spinnerSize={18}
                                color="inherit"
                            />
                            Saving...
                        </>
                    ) : (
                        "Save"
                    )}
                </button>
            </form>
        </div>

    )
}

export default AddAddressForm;
