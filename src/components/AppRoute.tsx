import { Route, Routes } from "react-router-dom";
import HomePage from "./Main/HomePage/HomePage";
import AboutPage from "./Main/About/AboutPage";
import Catalog from "./Main/Catalog/Catalog";
import Product from "./Main/Product/Product";

const AppRoute = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/about"} element={<AboutPage/>}/>
            <Route path={"/catalog"} element={<Catalog/>}/>
            <Route path={"/catalog/:elemId"} element={<Product/>}/>
        </Routes>
    )
}

export default AppRoute;