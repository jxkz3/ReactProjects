import { useEffect, useState } from "react";
import { bikes } from "../server";

export default function Bikes() {
  const bikeElements = bikes.map((bike) => (
    <div className="bike-ct" key={bike.id}>
      <img src={bike.imageUrl}></img>
      <h2>{bike.name}</h2>
      <p>₹{bike.price}</p>
    </div>
  ));

  return <div>{bikeElements}</div>;
}
