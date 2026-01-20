import { Route, Routes } from "react-router-dom";
import HomePage from "./Main/HomePage/HomePage";
import AboutPage from "./Main/About/AboutPage";

const AppRoute = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/about"} element={<AboutPage/>}/>
        </Routes>
    )
}

export default AppRoute;