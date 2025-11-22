import { useNavigate, useParams } from "react-router-dom";
import { bikes } from "../server";

function BikeDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const bike = bikes.find((b) => b.id === id);
  if (bike) {
    return (
      <div className="bike-dt-ct">
        <div className="dt-img-ct">
          <img src={bike.imageUrl}></img> <h1>{bike.name}</h1>
        </div>
        <p>
          Description : <i> {bike.description} </i>
        </p>

        <div>
          <button className="bike-btn" onClick={() => navigate("/bikes")}>
            Back to Bikes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Bike not found</h1>
    </div>
  );
}

export default BikeDetails;
