import { createAsyncThunk } from "@reduxjs/toolkit";

import IListArticles from "../components/types/Articles";

const fetchArticlesList = createAsyncThunk<IListArticles>(
  "articles/articlesList",
  async () => {
    const response = await fetch(`https://blog.kata.academy/api/articles`);
    console.log(response.json());
    return response.json();
  }
);

export default fetchArticlesList;
