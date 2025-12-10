import { Navigate, redirect } from "react-router-dom";
import { loginUser } from "../auth";

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    loginUser();
    Navigate("/host");
  }

  return (
    <div className="loginpage-container">
      <h1> Login Page </h1>
      <form className="login-form" onChange={handleSubmit}>
        <input type="email" required />
        <input type="password" required />
        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}
