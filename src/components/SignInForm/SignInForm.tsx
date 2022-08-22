import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import cn from "classnames";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../store/store";
import {
  fetchExistingUser,
  fetchGetUserInfo,
} from "../../services/usersAuthentication";
import { ISignIn } from "../../types/FormTypes";
import "./SignInForm.scss";

const SignInForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const inLogin = async (user: {
    user: {
      email: string;
      password: string;
    };
  }) => {
    fetchExistingUser(user).then((res) => {
      console.log(res);
      dispatch(fetchGetUserInfo(res.user.token));
      return navigate(`/articles`);
    });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ISignIn>({ mode: "onSubmit" });
  const onSubmit = handleSubmit((data) => {
    const user = {
      user: {
        email: data.email,
        password: data.password,
      },
    };
    console.log(user);
    inLogin(user);
    reset();
  });
  return (
    <div className="SignIn-container">
      <h2>Sign In</h2>
      <form onSubmit={onSubmit}>
        <label>
          Email address
          <input
            className={cn({ "error-input": errors?.email?.message })}
            type="text"
            placeholder="Email address"
            {...register("email", {
              required: "Поле обязательно к заполнению",
              pattern: {
                // eslint-disable-next-line no-useless-escape
                value: /^[\w-\.]+@[\w-]+\.[rucom]{2,3}$/i,
                message: "invalid email address",
              },
            })}
          />
        </label>
        <div>
          {<p>{errors?.email?.message}</p> || <p>{"Error in text email!"}</p>}
        </div>
        <label style={{ marginBottom: "21px" }}>
          Password
          <input
            type="text"
            placeholder="Password"
            className={cn({ "error-input": errors?.password?.message })}
            {...register("password", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 6,
                message: "Your password needs to be at least 6 characters.",
              },
              maxLength: {
                value: 40,
                message: "Your user name must be no more than 40 characters.",
              },
            })}
          />
        </label>
        <input type="submit" className="sign-in-submit" value={`Login`}></input>
      </form>

      <div className="sign-up-refuse">
        Don`t have an account? <Link to="/sign-up"> Sign Up.</Link>
      </div>
    </div>
  );
};

export default SignInForm;
