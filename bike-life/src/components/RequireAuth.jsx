import { Navigate, useLocation } from "react-router-dom";
import { isLoggedIn } from "../auth"; // adjust path

export default function RequireAuth({ children }) {
  const location = useLocation();

  if (!isLoggedIn()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
