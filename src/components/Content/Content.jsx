// Content component

import "./Content.css";
import { Routes, Route } from "react-router";
import { Home } from "../Home/Home.jsx";
import { Shop } from "../Shop/Shop.jsx";
import { Cart } from "../Cart/Cart.jsx";

export function Content() {
  return (
    <div className="content-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
}
