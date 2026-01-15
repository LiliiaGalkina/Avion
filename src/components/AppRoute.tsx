import { Route, Routes } from "react-router-dom";
import HomePage from "./Main/HomePage/HomePage";

const AppRoute = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
        </Routes>
    )
}

export default AppRoute;