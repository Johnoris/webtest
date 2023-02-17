import RequireAuth from "middleware/requireAuth";
import Login from "pages/auth/login";
import Profile from "pages/main/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/*Main Routes*/}
                <Route element={<RequireAuth/>}>
                    <Route path='/' element={<Profile/>}/>
                </Route>
                {/*Auth Routes */}
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;