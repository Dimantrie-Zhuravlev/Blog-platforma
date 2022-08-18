import React from "react";

import "./SignUpForm.scss";

const SignUpForm = () => {
  return (
    <div className="SignUp-container">
      <h2>Create new account</h2>
      <form>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" />
        <label>Email address</label>
        <input type="text" name="email" placeholder="Email address" />
        <label>Password</label>
        <input type="text" name="password" placeholder="Password" />
        <label>Repeat Password</label>
        <input type="text" name="passwordRepeat" placeholder="Password" />
      </form>
      <div>
        <input type="checkbox" className="check-form"></input>
        <label>I agree to the processing of my personal information</label>
      </div>
    </div>
  );
};

export default SignUpForm;
