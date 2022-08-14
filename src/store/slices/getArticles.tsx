import { createSlice } from "@reduxjs/toolkit";

import fetchArticlesList from "../../services/ticketsApi";
import IListArticles from "../../types/Articles";

const initialState = {
  articles: [],
} as IListArticles;

export const articlesList = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        console.log(state, "загрузка");
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.articles = action.payload.articles;
      })
      .addCase(fetchArticlesList.rejected, (state) => {
        console.log(state.articles, "ошибка");
      });
  },
});

export default articlesList.reducer;
