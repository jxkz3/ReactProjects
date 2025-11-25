import { NavLink } from "react-router-dom";
import "../../server";
import { bikes } from "../../server";

export default function HostVans() {
  const HostedVans = bikes.map((b) => (
    <NavLink to={b.id} className="hostvan-link">
      <div className="hostvan-ct">
        <img src={b.imageUrl}></img>
        <h2> {b.name} </h2>

        <p>Price: {b.price}</p>
      </div>
    </NavLink>
  ));

  return (
    <>
      <h1>Host vans page</h1>
      <div>{HostedVans} </div>
    </>
  );
}
