import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>WebDev</h1>
      </Link>
      <nav>
        <Link to="/"> Home</Link>
        <NavLink to="contacts">Contacts</NavLink>
        <NavLink to="skills">Skills</NavLink>
        <NavLink to="projects">Projects</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
    </header>
  );
}
