// Header component

import "./Header.css";

export function Header() {
  return (
    <div className="header-container">
      <div className="header-text">Pizza mart</div>
      <div className="header-buttons-container">
        <button className="header-button">Home</button>
        <button className="header-button">Pizza</button>
        <button className="header-button">Cart</button>
      </div>
    </div>
  );
}
