import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>WebDev</h1>
      <nav>
        <Link to="/"> Home</Link>
        <a>skills</a>
        <a>education</a>
        <a>Aboout</a>
        <a>Contact</a>
      </nav>
    </header>
  );
}
