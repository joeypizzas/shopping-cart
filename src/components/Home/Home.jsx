// Home component

import "./Home.css";
import pizzaImage from "../../assets/home-apizza.png";

export function Home() {
  return (
    <div className="home-container">
      <div className="home-title-subtitle">
        <div className="home-title">Good pizza. Made fresh.</div>
        <div className="home-subtitle">
          Let the pizza plans take care of themselves.
        </div>
      </div>
      <img
        src={pizzaImage}
        alt="New Haven style pepperoni apizza coming out of an oven"
        className="pizza-image"
      />
      <button className="home-button">Order now</button>
    </div>
  );
}
