import React from "react";
import { Link } from "react-router-dom";

import "./SignInForm.scss";

const SignInForm = () => {
  return (
    <div className="SignIn-container">
      <h2>Sign In</h2>
      <form>
        <label>
          Email address
          <input type="text" name="email" placeholder="Email address" />
        </label>
        <label style={{ marginBottom: "21px" }}>
          Password
          <input type="text" name="password" placeholder="Password" />
        </label>
      </form>
      <button className="sign-up-submit">Login</button>
      <div className="sign-up-refuse">
        Already have an account? <Link to="/sign-up"> Sign Up.</Link>
      </div>
    </div>
  );
};

export default SignInForm;
