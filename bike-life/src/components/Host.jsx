import { NavLink, Outlet } from "react-router-dom";

export default function Host() {
  return (
    <>
      <div>
        <h1>Host Page</h1>
        <nav className="host-nav">
          <NavLink to="" end className="host-link">
            DashBoard
          </NavLink>
          <NavLink to="income" className="host-link">
            Income
          </NavLink>
          <NavLink to="vans" className="host-link">
            Bikes
          </NavLink>
          <NavLink to="review" className="host-link">
            Review
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
