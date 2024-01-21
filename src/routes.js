import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import OrderPage from "./pages/OrderPage";

const myRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/orders" element={<OrderPage />} />
            </Routes>
        </Router>
    )
}

export default myRoutes