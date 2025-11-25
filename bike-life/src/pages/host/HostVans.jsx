import { NavLink } from "react-router-dom";
import "../../server";
import { bikes } from "../../server";

export default function HostVans() {
  const myId = 123;

  const HostedVans = bikes.map((b) =>
    b.hostId === myId ? (
      <NavLink to={b.id} className="hostvan-link">
        <div className="hostvan-ct">
          <img src={b.imageUrl}></img>
          <h2> {b.name} </h2>

          <p>Price: {b.price}</p>
        </div>
      </NavLink>
    ) : null
  );

  return (
    <>
      <h1>Host vans page</h1>
      <div>{HostedVans} </div>
    </>
  );
}
