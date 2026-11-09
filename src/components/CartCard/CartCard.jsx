// CartCard component

import "./CartCard.css";

export function CartCard() {
  return (
    <div className="cart-card-container">
      <div className="item-name-and-price">
        <div className="item-name"></div>
        <div className="item-price"></div>
      </div>
      <div className="item-quantity-total-and-remove">
        <div className="quantity-container">
          <button className="quantity-button"></button>
          <div className="quantity"></div>
          <button className="quantity-button"></button>
        </div>
        <div className="total-and-remove">
          <div className="total"></div>
          <button className="remove-button"></button>
        </div>
      </div>
    </div>
  );
}
