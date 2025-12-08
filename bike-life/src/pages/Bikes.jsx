import { useEffect, useState } from "react";
import { bikes } from "../server";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function Bikes() {
  const [searchParam, setSearchParam] = useSearchParams();

  const typeFilter = searchParam.get("type");

  const filterBike = typeFilter
    ? bikes.filter((bike) => bike.type === typeFilter)
    : bikes;

  const bikeElements = filterBike.map((bike) => (
    <Link
      to={bike.id}
      key={bike.id}
      className="bike-link-ct"
      state={{ search: `?${searchParam.toString()}` }}
    >
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
        <button
          className={typeFilter === "adventure" ? "active-filter " : ""}
          onClick={() => setSearchParam({ type: "adventure" })}
        >
          adventure
        </button>
        <button
          className={typeFilter === "cruiser" ? "active-filter " : ""}
          onClick={() => setSearchParam({ type: "cruiser" })}
        >
          cruiser
        </button>
        <button
          className={typeFilter === "sport" ? "active-filter " : ""}
          onClick={() => setSearchParam({ type: "sport" })}
        >
          sport
        </button>
        {typeFilter ? (
          <button onClick={() => setSearchParam({})}>clear</button>
        ) : null}
      </div>

      <div className="bike-main-ct">{bikeElements}</div>
    </div>
  );
}
