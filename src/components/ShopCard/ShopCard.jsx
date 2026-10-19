// ShopCard component

import "./ShopCard.css";

export function ShopCard() {
  return (
    <div className="card-container">
      <div className="img-placeholder"></div>
      <div className="card-content">
        <div className="card-title">Classic Pepperoni</div>
        <div className="card-description">
          Tomato sauce, melted mozzarella, and crispy pepperoni on a golden
          crust.
        </div>
        <div className="card-price">$11.99</div>
        <div className="quantity-container">
          <button className="quantity-minus-button">-</button>
          <div className="quantity-amount">1</div>
          <button className="quantity-plus-button">+</button>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}
