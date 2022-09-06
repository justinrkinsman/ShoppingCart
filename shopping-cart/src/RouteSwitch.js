import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage"
import { Shop } from "./components/ShopPage"

export const RouteSwitch = () => {
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </BrowserRouter>
    )
}