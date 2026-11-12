// CartCard component

import "./CartCard.css";

export function CartCard() {
  return (
    <div className="cart-card-container">
      <div className="item-name-and-price">
        <div className="item-name">Classic Pepperoni</div>
        <div className="item-price">$11.99 each</div>
      </div>
      <div className="item-quantity-total-and-remove">
        <div className="quantity-container">
          <button className="quantity-button">-</button>
          <div className="quantity">3</div>
          <button className="quantity-button">+</button>
        </div>
        <div className="total-and-remove">
          <div className="total">$35.97</div>
          <button className="remove-button">Remove</button>
        </div>
      </div>
    </div>
  );
}
