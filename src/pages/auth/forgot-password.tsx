import { useState } from "react";
import { Form, Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  return (
    <Form action="/auth/forgot-password/post" method="post">
      <div className="grid grid-cols-1 gap-y-2 w-full p-4 mr-4 items-center">
        <h3 className="text-3xl font-semibold text-center">Forgot Password</h3>
        <p>
          <Link to="/auth/login" className="p-2 text-blue-500">
            Login
          </Link>
        </p>
        <hr />

        <div className="form-group">
          <label className="label font-semibold">
            Enter your Email for Reset Link:
          </label>
          <input
            type="text"
            className="input input-accent w-full"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-accent rounded-xl mt-4">
          Submit
        </button>
      </div>
    </Form>
  );
}
