import { createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

import {
  IPostUser,
  IPostUserResponse,
  IPostexhistingUser,
} from "../types/UsersStart";

export const fetchregisterUser = (user: IPostUser) =>
  fetch(`https://blog.kata.academy/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((res) => {
      const navigate = useNavigate();
      navigate("/sign-in");
      return res;
    });

export const fetchExistingUser = (user: IPostexhistingUser) =>
  fetch(`https://blog.kata.academy/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    });

export const fetchGetUserInfo = createAsyncThunk<IPostUserResponse, string>(
  "users/usersInfo",
  (auth: string) =>
    fetch(`https://blog.kata.academy/api/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${auth}`,
      },
    })
      .then((res) => res.json())
      .then((res) => res)
);

export default fetchregisterUser;
