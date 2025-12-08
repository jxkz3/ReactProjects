import { useNavigate, useRouteError } from "react-router-dom";

export default function Error() {
  const navigation = useNavigate();
  const error = useRouteError();

  return (
    <div className="not-found-container">
      <h1>Error : {error.message}</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
      <button onClick={() => navigation("/")} className="bike-btn">
        Back to home
      </button>
    </div>
  );
}
