// Cart component

import "./Cart.css";
import { CartCard } from "../CartCard/CartCard.jsx";

export function Cart() {
  return (
    <div className="cart-container">
      <div className="cart-header">Cart</div>
      <div className="cart-cards-container">
        <CartCard></CartCard>
      </div>
    </div>
  );
}
