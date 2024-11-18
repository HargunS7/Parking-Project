import React from "react";
import "../Styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="form-title">Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="submit-button">Login</button>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
