import { createAsyncThunk } from "@reduxjs/toolkit";

import IListArticles from "../types/Articles";
import { IPostNewArticle } from "../types/FormTypes";

// получение большого списка артиклов
const fetchArticlesList = createAsyncThunk<IListArticles, number>(
  "articles/articlesList",
  (page: number) =>
    fetch(`https://blog.kata.academy/api/articles?offset=${page * 20}`)
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => {
        throw new Error(error.message);
      })
);

// получение определенного артикла по слагу
export const fetchArticlesSlug = (slug: string) =>
  fetch(`https://blog.kata.academy/api/articles/${slug}`)
    .then((res) => res.json())
    .then((res) => res);

export const fetchPostNewArticle = (body: IPostNewArticle, token: string) =>
  fetch(`https://blog.kata.academy/api/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((res) => res);

export default fetchArticlesList;
