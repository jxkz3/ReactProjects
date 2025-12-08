import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigation = useNavigate();

  return (
    <div className="not-found-container">
      <h1>Page your looking is Not availabe</h1>
      <button onClick={() => navigation("/")} className="bike-btn">
        {" "}
        Back to home
      </button>
    </div>
  );
}
