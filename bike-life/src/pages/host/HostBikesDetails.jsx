import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
import { bikes } from "../../server";

export default function HostBikesDetails() {
  const { id } = useParams();

  const bike = bikes.find((b) => b.id === id);

  const navigate = useNavigate();

  return (
    <>
      <Link to="../bikes" className="back-link">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="bike-detail-ct">
        <h1>{bike.name}</h1>

        <div className="type-ct">
          <img src={bike.imageUrl}></img>
          <h3>{bike.type} </h3>
        </div>
        <div className="host-nav">
          <NavLink to="pricing"> Price </NavLink>
          <NavLink to="description"> Description</NavLink>
          <NavLink to="photos"> Photos</NavLink>
        </div>

        <Outlet />
        <div>
          <button className="bike-btn" onClick={() => navigate("/bikes")}>
            Back to Bikes
          </button>
        </div>
      </div>
    </>
  );
}
