// Shop component

import "./Shop.css";
import { ShopCard } from "../ShopCard/ShopCard.jsx";

export function Shop() {
  return (
    <div className="shop-container">
      <div className="shop-header">Pick your pizza. Dinner starts here.</div>
      <div className="shop-cards-container">
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
      </div>
    </div>
  );
}
