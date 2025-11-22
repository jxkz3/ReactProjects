import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        Home
      </Link>
      <nav>
        <Link to="/host">Host</Link>
        <Link to="/bikes">Bikes</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
