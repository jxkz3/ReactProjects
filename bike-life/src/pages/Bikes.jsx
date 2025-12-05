import { useEffect, useState } from "react";
import { bikes } from "../server";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function Bikes() {
  const [searchParam, setSearchParam] = useSearchParams();

  const typeFilter = searchParam.get("type");

  const bikeElements = bikes.map((bike) => (
    <Link to={`/bikes/${bike.id}`} key={bike.id} className="bike-link-ct">
      <div className="bike-ct">
        <div className="bike-img-container">
          <img src={bike.imageUrl} alt={bike.name} />
        </div>
        <div className="bike-content">
          <div className="bike-name">
            <h2>{bike.name}</h2>
          </div>
          <div className="bike-price-layer">
            <h3 className="bike-type-ct">{bike.type}</h3>
            <p className="bike-price">$ {bike.price}</p>
          </div>
        </div>
      </div>
    </Link>
  ));

  return (
    <div>
      <div className="search-type-ct">
        <button onClick={() => setSearchParam({ type: "rugged" })}>
          rugged
        </button>
        <button onClick={() => setSearchParam({ tyspe: "luxry" })}>
          luxry
        </button>
        <button onClick={() => setSearchParam({ type: "simple" })}>
          simple
        </button>
        <button onClick={() => setSearchParam({})}>clear</button>
      </div>

      <div className="bike-main-ct">{bikeElements}</div>
    </div>
  );
}
