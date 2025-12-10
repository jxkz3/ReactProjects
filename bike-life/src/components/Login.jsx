import { useNavigate, Form, useActionData } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
}

export default function Login() {
  return (
    <div className="loginpage-container">
      <h1> Login Page </h1>
      <Form method="post" className="login-form">
        <input type="email" name="email" required />

        <input type="password" name="password" required />
        <input type="submit" value="Log in" />
      </Form>
    </div>
  );
}
