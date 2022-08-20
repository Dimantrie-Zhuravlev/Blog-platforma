import React from "react";
import { Link } from "react-router-dom";

import "./SignUpForm.scss";

const SignUpForm = () => {
  return (
    <div className="SignUp-container">
      <h2>Create new account</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" placeholder="Username" />
        </label>

        <label>Email address</label>
        <input type="text" name="email" placeholder="Email address" />
        <label>Password</label>
        <input type="text" name="password" placeholder="Password" />
        <label>Repeat Password</label>
        <input type="text" name="passwordRepeat" placeholder="Password" />
      </form>
      <div className="sign-up-agree">
        <input type="checkbox" className="check-form"></input>
        <label>I agree to the processing of my personal information</label>
      </div>
      <button className="sign-up-submit">Create</button>
      <div className="sign-up-refuse">
        Already have an account? <Link to="/sign-in"> Sign In.</Link>
      </div>
    </div>
  );
};

export default SignUpForm;
