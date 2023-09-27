import { useState } from "react";
import { Form, Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form action="/auth/register/post" method="post">
      <div className="grid grid-cols-1 gap-y-2 w-full p-4 mr-4 items-center">
        <h3 className="text-3xl font-semibold text-center">Register</h3>
        <p>
          Already have an account?
          <Link to="/auth/login" className="p-2 text-blue-500">
            Login
          </Link>
        </p>
        <hr />
        <div className="form-group">
          <label className="label font-semibold" htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            className="input input-accent w-full"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label font-semibold" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            className="input input-accent w-full"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label font-semibold" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            className="input input-accent w-full"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-accent rounded-xl mt-4">
          Register
        </button>
      </div>
    </Form>
  );
}
