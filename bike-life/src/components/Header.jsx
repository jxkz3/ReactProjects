import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        Home
      </Link>
      <nav>
        <NavLink className="head-link" to="/host">
          Host
        </NavLink>
        <NavLink className="head-link" to="/bikes">
          Bikes
        </NavLink>
        <NavLink className="head-link" to="/about">
          About
        </NavLink>
      </nav>
    </header>
  );
}
