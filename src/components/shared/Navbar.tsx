import { Badge } from "@mui/material";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Spiral as Hamburger } from 'hamburger-react'
import { useSelector } from "react-redux";
import type { RootState } from "../../store/reducers/store";
import { MdOutlineLogin } from "react-icons/md";

const Navbar = () => {
    const path = useLocation().pathname;
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { cart } = useSelector((state: RootState) => state.carts);
    return (
        <div className="sm:h-[50px] h-[70px] bg-[#3E5F44] text-white z-50 flex items-center sticky top-0">
            <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
                <Link to="/" className="flex items-center text-2xl font-bold">
                    <span className="font-display">PC Lair</span>
                </Link>
                <ul className={`flex sm:gap-10 gap-4 sm:items-center text-slate-800 sm:static 
                                absolute left-0 top-[70px] sm:shadow-none shadow-md ${navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"}
                                transition-all duration-100 sm:h-fit sm:bg-none bg-[#3E5F44] text-white sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}>
                    <li className="font-[500] transition-all duration-150">
                        <Link className={`${path === "/" ? "text-white font-semibold" :
                            "text-slate-200 hover:text-slate-300"}`}
                            to="/">
                            Home
                        </Link>
                    </li>
                    <li className="font-[500] transition-all duration-150">
                        <Link className={`${path === "/products" ? "text-white font-semibold" :
                            "text-slate-200 hover:text-slate-300"}`}
                            to="/products">
                            Products
                        </Link>
                    </li>
                    <li className="font-[500] transition-all duration-150">
                        <Link className={`${path === "/about" ? "text-white font-semibold" :
                            "text-slate-200 hover:text-slate-300"}`}
                            to="/about">
                            About
                        </Link>
                    </li>
                    <li className="font-[500] transition-all duration-150">
                        <Link className={`${path === "/contact" ? "text-white font-semibold" :
                            "text-slate-200 hover:text-slate-300"}`}
                            to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="font-[500] transition-all duration-150">
                        <Link className={`${path === "/cart" ? "text-white font-semibold" :
                            "text-slate-200 hover:text-slate-300"}`} to="/cart">
                            <Badge badgeContent={cart?.length || 0} color="primary" overlap="circular"
                                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                                <FaShoppingCart size={25} />
                            </Badge>
                        </Link>
                    </li>
                    <li className="font-[500] transition-all duration-150">
                        <Link className="flex justify-center items-center space-x-2 px-4 border rounded-xl hover:text-slate-400"
                            to="/login">
                            <MdOutlineLogin />
                            <span>Login</span>
                        </Link>
                    </li>
                </ul>
                <div className="sm:hidden flex items-center sm:mt-0 mt-2">
                    <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} size={20} />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
