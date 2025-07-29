import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CgLogIn } from "react-icons/cg"
import InputField from "../shared/InputField";
import Loader from "../shared/Loader";
import { useAppDispatch } from "../../store/reducers/store";
import { authenticateLogin } from "../../store/actions";
import toast from "react-hot-toast";
import type { LoginType } from "../../types/LoginType";

const Login = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginType>({ mode: "onTouched" });

    const loginHandler = async (data: LoginType) => {
        dispatch(authenticateLogin(data, toast, reset, navigate, setLoader));
    };
    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
            <form onSubmit={handleSubmit(loginHandler)}
                className="sm:w-[450px] w-[360px] shadow-md shadow-gray-400 py-8 sm:px-8 px-4 rounded-md">
                <div className="flex items-center justify-center space-x-4">
                    <CgLogIn className="text-slate-800 text-3xl" />
                    <h1 className="text-slate-800 font-display lg:text-3xl text-2xl font-bold">
                        Login your Account
                    </h1>
                </div>
                <hr className="mt-2 mb-5 text-black" />
                <div className="flex flex-col gap-3">
                    <InputField
                        label="Username"
                        required
                        id="username"
                        type="text"
                        message="Username is required"
                        placeHolder="username"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        message="Password is required"
                        placeHolder="password"
                        register={register}
                        errors={errors}
                    />
                </div>
                <button disabled={loader}
                    className="flex gap-2 items-center justify-center font-semibold w-full py-2
                    border bg-[#3E5F44] text-white hover:bg-[#2D402F] transition-colors duration-100 rounded-sm my-3"
                    type="submit">
                    {loader ? (
                        <>
                            <Loader
                                containerClassName="w-auto h-auto"
                                innerClassName="flex items-center"
                                spinnerSize={18}
                                color="inherit"
                            />
                            Logging in...
                        </>
                    ) : (
                        "Login"
                    )}
                </button>
                <p className="text-center text-sm text-slate-700 mt-6">
                    Don't have an account? {" "}
                    <Link to="/register" className="font-semibold hover:underline text-[#3E5f44]">
                        <span>Sign Up</span>
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
