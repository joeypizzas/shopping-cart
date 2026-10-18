// Header component

import "./Header.css";
import { NavLink } from "react-router";

export function Header() {
  return (
    <div className="header-container">
      <div className="header-text">Pizza mart</div>
      <nav className="header-buttons-container">
        <NavLink to="/" className="header-button">
          Home
        </NavLink>
        <NavLink to="/shop" className="header-button">
          Pizza
        </NavLink>
        <NavLink to="/cart" className="header-button">
          Cart
        </NavLink>
      </nav>
    </div>
  );
}
