import { useEffect, useState } from "react";
import { bikes } from "../server";
import { Link } from "react-router-dom";

export default function Bikes() {
  const bikeElements = bikes.map((bike) => (
    <div key={bike.id} className="bike-ct">
      <Link to={`/bikes/${bike.id}`} className="bike-link-ct">
        <img src={bike.imageUrl} />
      </Link>

      <h2>{bike.name}</h2>
      <p>$ {bike.price}</p>
    </div>
  ));

  return <div>{bikeElements}</div>;
}
