import React, { useState } from 'react';
import './ForgetPassword.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here, such as sending a reset link to the provided email
    console.log("Reset link sent to:", email);
  };

  return (
    <div className="forget-password-wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Forget Password</h1>
        <p>Enter your email to reset your password.</p>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Reset Link</button>
        <div className="back-to-login">
          <p>
            Remember your password? <a href="/login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
