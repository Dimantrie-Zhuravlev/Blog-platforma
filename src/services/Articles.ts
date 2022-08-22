import { createAsyncThunk } from "@reduxjs/toolkit";

import IListArticles from "../types/Articles";

const fetchArticlesList = createAsyncThunk<IListArticles, number>(
  "articles/articlesList",
  (page: number) =>
    fetch(`https://blog.kata.academy/api/articles?offset=${page}`)
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => {
        throw new Error(error.message);
      })
);

export const fetchArticlesSlug = (slug: string) =>
  fetch(`https://blog.kata.academy/api/articles/${slug}`)
    .then((res) => res.json())
    .then((res) => res);

export default fetchArticlesList;
