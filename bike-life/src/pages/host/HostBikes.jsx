import { NavLink } from "react-router-dom";
import "../../server";
import { bikes } from "../../server";

export default function HostBikes() {
  const myId = 123;

  const HostedVans = bikes.map((b) =>
    b.hostId === myId ? (
      <NavLink to={b.id} className="hostbike-link">
        <div className="hostbike-ct">
          <img src={b.imageUrl}></img>
          <h2> {b.name} </h2>

          <p>Price: {b.price}</p>
        </div>
      </NavLink>
    ) : null
  );

  return (
    <>
      <h2>Host bike page</h2>
      <div>{HostedVans} </div>
    </>
  );
}
