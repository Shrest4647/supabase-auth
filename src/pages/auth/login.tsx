import { useState } from "react";
import { Form, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form action="/auth/login/post" method="post">
      <div className="grid grid-cols-1 gap-y-2 w-full p-4 mr-4 items-center">
        <h3 className="text-3xl font-semibold text-center">Login</h3>
        <p>
          Create an account?
          <Link to="/auth/register" className="p-2 text-blue-500">
            Register
          </Link>
        </p>
        <p>
          Forgot Password?
          <Link to="/auth/forgot-password" className="p-2 text-blue-500">
            Reset
          </Link>
        </p>
        <hr />
        <div className="form-group">
          <label className="label font-semibold">Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-accent w-full"
          />
        </div>
        <div className="form-group">
          <label className="label font-semibold">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-accent w-full"
          />
        </div>
        <br />
        <button
          type="submit"
          disabled={email === "" || password === ""}
          className="btn btn-accent"
        >
          Login
        </button>
      </div>
    </Form>
  );
}
