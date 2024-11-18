import React from "react";
import "../Styles/SignUp.css";

const SignUp = () => {
  return (
    <>
      
      <main>
        <div className="signup-container">
          <form className="signup-form">
            <h2 className="form-title">Sign Up</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" placeholder="Enter your username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select id="role" name="role">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button type="submit" className="submit-button">Sign Up</button>
          </form>
        </div>
      </main>
      
      
    </>
  );
};

export default SignUp;
