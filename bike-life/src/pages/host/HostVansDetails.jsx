import { useNavigate, useParams } from "react-router-dom";
import { bikes } from "../../server";

export default function HostVansDetails() {
  const { id } = useParams();

  const bike = bikes.find((b) => b.id === id);

  const navigate = useNavigate();

  return (
    <>
      <div className="bike-detail-ct">
        <h1>{bike.name}</h1>
        <img src={bike.imageUrl}></img>
        <p>Description : {bike.description}</p>
        <h3>{bike.type} </h3>

        <div>
          <button className="bike-btn" onClick={() => navigate("/bikes")}>
            Back to Bikes
          </button>
        </div>
      </div>
    </>
  );
}
