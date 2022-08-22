import { createSlice } from "@reduxjs/toolkit";

import { fetchGetUserInfo } from "../../services/usersAuthentication";
import { IPostUserResponse } from "../../types/UsersStart";

const initialState = {
  user: { email: "", token: "", username: "", bio: "", image: "" },
} as IPostUserResponse;

export const userInfo = createSlice({
  name: "user",
  initialState,
  reducers: {
    unLogin(state) {
      state.user = { email: "", token: "", username: "", bio: "", image: "" };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetUserInfo.pending, () => {
        console.log(1);
      })
      .addCase(fetchGetUserInfo.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload.user;
      })
      .addCase(fetchGetUserInfo.rejected, (state) => {
        console.log(state.user, "ошибка");
      });
  },
});

export const { unLogin } = userInfo.actions;
export default userInfo.reducer;
