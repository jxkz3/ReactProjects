import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="head-ct">
      <Link to="/">
        <h1>WebDev</h1>
      </Link>
      <div className="head-nav-ct">
        <nav className="head-nav">
          <Link to="/"> Home</Link>
          <NavLink to="contacts">Contacts</NavLink>
          <NavLink to="skills">Skills</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}
