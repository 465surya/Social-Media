import React, { useState } from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogleLogin = (response) => {
    console.log("Google Login Response:", response);
    // Handle the Google login response here, e.g., send the token to your backend for verification
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login/data", {
        mail: email,
        password: password,
      });

      if (response.status === 200 && response.data.success) {
        // Successful login, redirect to the next page
        console.log("Login successful:", response.data);
        window.location.href = "/";
      } else {
        // Handle incorrect credentials or other errors
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="remember-forget">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="/for">Forgot password?</a>
        </div>
         <a href="/" class="button-link">Login</a>


        <div className="or-separator">
          <p>or</p>
        </div>

        <div className="google-login">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={(error) => console.error("Google Login Error:", error)}
            render={(renderProps) => (
              <button
                type="button"
                className="google-btn"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <FcGoogle className="google-icon" />
                Login with Google
              </button>
            )}
          />
        </div>

        <div className="register-link">
          <p>
            Don't have an account? <a href="/regis">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
