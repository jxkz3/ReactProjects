import { Form, redirect } from "react-router-dom";
import { loginUser } from "../auth";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  loginUser();

  return redirect("/host", { replace: true });
}

export default function Login() {
  return (
    <div className="container">
      <div className="loginpage-container">
        <h1> Login Page </h1>
        <Form method="post" className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />

          <input type="submit" value="Log in" />
        </Form>
      </div>
    </div>
  );
}
