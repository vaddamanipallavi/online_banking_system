import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import Layout from "../components/Layout";
import "../styles/Login.css";
import api from "../api"; // 👈 axios instance

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [useOtp, setUseOtp] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || (!useOtp && !password) || (useOtp && !otp)) {
      setError("Please fill all required fields");
      return;
    }

    try {
      // 👇 call backend login API
      const res = await api.post("/users/login", {
        email,
        password,
        otp: useOtp ? otp : null, // optional, for future OTP
      });

      // save user data in localStorage
      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("isLoggedIn", "true");

      setError("");
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <Layout>
      {error && <p className="login-error">{error}</p>}
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <h2 className="login-title">Login</h2>

          <Input
            label="Email / Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {!useOtp && (
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          )}

          {useOtp && (
            <Input
              label="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          )}

          <Button type="submit">Login</Button>
          <Button type="button" onClick={goToRegister}>
            Register
          </Button>

          <p
            className="toggle-login-method"
            onClick={() => setUseOtp(!useOtp)}
          >
            {useOtp ? "Login with password" : "Login with OTP"}
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
