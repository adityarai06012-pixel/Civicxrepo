import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../utils/auth";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = loginUser({ email, password });

    if (!result.success) {
      alert(result.message);
      return;
    }

    alert(`👋 Welcome back, ${result.user.first_name}!`);
    navigate("/");
  };

  return (
    <section className="auth-container">
      <h1>Login to CivicX</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </li>

          <li>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </li>
        </ul>

        <button type="submit" className="btn btn-primary">
          Login
        </button>

        <p className="muted">
          Don&apos;t have an account?{" "}
          <Link to="/signup">Sign up here</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
