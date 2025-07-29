import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import type { RootState } from "../store/reducers/store";

const PrivateRoute = ({ publicPage = false }) => {
    const { user } = useSelector((state: RootState) => state.auth);
    if (publicPage) {
        return user ? <Navigate to="/" /> : <Outlet />
    }
    return (
        user ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoute;
