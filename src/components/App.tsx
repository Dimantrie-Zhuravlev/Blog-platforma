import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";

import { AppDispatch } from "../store/store";
import fetchArticlesList from "../services/ticketsApi";

import ArticlesList from "./ArticlesList";
import Header from "./Header";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchArticlesList(0));
  }, []);
  return (
    <div>
      <Header />
      <ArticlesList />
      <div>App Content</div>
    </div>
  );
};

export default App;
