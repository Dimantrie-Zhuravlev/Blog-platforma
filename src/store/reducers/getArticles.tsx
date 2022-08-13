import { createSlice } from "@reduxjs/toolkit";

import fetchArticlesList from "../../services/ticketsApi";
import IListArticles from "../../components/types/Articles";

const initialState = {
  articles: [],
} as IListArticles;

export const articlesList = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
      console.log(action);
      state.articles = [];
    });
  },
});

export default articlesList.reducer;
