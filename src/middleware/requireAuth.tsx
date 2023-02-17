import { AppContext } from "context/appContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router";

const RequireAuth = () => {
    const appContext = useContext(AppContext);
    const auth = appContext?.auth
    return (
        auth !== ''
            ?
            <Outlet/>
            :
            <Navigate to="/login" replace={true} state={{ path: "/signin" }} />
    )
}
export default RequireAuth