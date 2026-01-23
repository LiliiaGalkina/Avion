import { Route, Routes } from "react-router-dom";
import HomePage from "./Main/HomePage/HomePage";
import AboutPage from "./Main/About/AboutPage";
import Catalog from "./Main/Catalog/Catalog";

const AppRoute = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/about"} element={<AboutPage/>}/>
            <Route path={"/catalog"} element={<Catalog/>}/>
        </Routes>
    )
}

export default AppRoute;