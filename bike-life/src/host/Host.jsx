import { Link } from "react-router-dom";

export default function Host() {
  return (
    <>
      <h1>Host Page</h1>
      <Link to="/host/income">Income</Link>
      <Link to="/host/review">Review</Link>
    </>
  );
}
