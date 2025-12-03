import { NavLink, Outlet } from "react-router-dom";

export default function Host() {
  return (
    <>
      <div className="host-ct">
        <h1 className="host-head">Host Page</h1>
        <nav className="host-nav">
          <NavLink to="" end className="host-link">
            DashBoard
          </NavLink>
          <NavLink to="income" className="host-link">
            Income
          </NavLink>
          <NavLink to="bikes" className="host-link">
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
