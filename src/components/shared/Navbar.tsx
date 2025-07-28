import { Badge } from "@mui/material";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Spiral as Hamburger } from 'hamburger-react';
import { useSelector } from "react-redux";
import type { RootState } from "../../store/reducers/store";
import { MdOutlineLogin } from "react-icons/md";
import UserMenu from "../UserMenu";

const Navbar = () => {
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { cart } = useSelector((state: RootState) => state.carts);
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="sm:h-[50px] h-[70px] bg-[#3E5F44] text-white z-50 sticky top-0 flex items-center">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between items-center">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold">
          <span className="font-display">PC Lair</span>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-6">
          {/* Desktop Menu */}
          <ul className="hidden sm:flex gap-8 text-white items-center">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" }
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  className={`${path === to ? "text-white font-semibold" : "text-slate-200 hover:text-slate-300"}`}
                  to={to}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Cart Icon */}
          <Link to="/cart" className="text-white">
            <Badge
              badgeContent={cart?.length || 0}
              color="primary"
              overlap="circular"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <FaShoppingCart size={22} />
            </Badge>
          </Link>

          {/* Login / User */}
          {user && user.id ? (
            <UserMenu />
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1 border px-3 py-1 rounded hover:text-slate-300"
            >
              <MdOutlineLogin />
              <span className="text-sm">Login</span>
            </Link>
          )}

          {/* Mobile Hamburger */}
          <div className="sm:hidden">
            <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} size={20} />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <ul
        className={`sm:hidden absolute top-[70px] left-0 w-full bg-[#3E5F44] text-white shadow-md flex flex-col gap-4 px-6 py-4 transition-all duration-150
          ${navbarOpen ? "opacity-100 visible" : "opacity-0 invisible h-0 overflow-hidden"}`}
      >
        {[
          { to: "/", label: "Home" },
          { to: "/products", label: "Products" },
          { to: "/about", label: "About" },
          { to: "/contact", label: "Contact" }
        ].map(({ to, label }) => (
          <li key={to}>
            <Link
              className={`${path === to ? "text-white font-semibold" : "text-slate-200 hover:text-slate-300"}`}
              to={to}
              onClick={() => setNavbarOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
