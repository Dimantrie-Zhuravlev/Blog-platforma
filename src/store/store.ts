import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import getArticles from "./slices/getArticles";

/* eslint-disable no-underscore-dangle */
export const store = configureStore({
  reducer: {
    articles: getArticles,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
