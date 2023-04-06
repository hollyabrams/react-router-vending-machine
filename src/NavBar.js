import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Vending Machine
      </NavLink>
      <NavLink exact to="/snack1">
        Snack1
      </NavLink>
      <NavLink exact to="/snack2">
        Snack2
      </NavLink>
      <NavLink exact to="/snack3">
        Snack3
      </NavLink>
    </nav>
  );
}

export default NavBar;